import React from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../actions';

class RecipeIngredients extends React.Component {
  state = {
    recipeIngredient: [...this.props.recipe]
  };

  componentDidMount() {
    console.log(this.props);
  }

  addIngredientField(e) {
    e.preventDefault();
    this.setState(prevState => ({ recipeIngredient: [...prevState.recipeIngredient, ''] }));
  }

  handleOnRecipeInputChange(e, i) {
    const val = e.target.value;
    this.setState(prevState => {
      const newIngredients = [...prevState.recipeIngredient];
      newIngredients[i] = val;
      return { recipeIngredient: newIngredients };
    });
  }

  handelDeletedIngredient(e) {
    const { recipeIngredient } = this.state;
    const val = e;
    const array = [...recipeIngredient]; // make a separate copy of the array
    const index = array.indexOf(val);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ recipeIngredient: array });
    }
  }

  handelOnSubmit(e) {
    e.preventDefault();

    this.props.editRecipe(this.state.id, this.state);
    this.props.history.push('/recipes');
  }

  handleOnInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderIngredients() {
    return (
      <div className="field">
        <label htmlFor="recipeIngredient">Ingredients:</label>

        {this.state.recipeIngredient.map((e, i) => (
          <div className="ui basic segment" key={`recipeIngredient${i}`}>
            <div className="ui right icon input">
              <input
                type="text"
                id={`recipeIngredient${i}`}
                name={`recipeIngredient${i}`}
                value={e}
                onChange={f => this.handleOnRecipeInputChange(f, i)}
              />
              <i className="close link icon" onClick={() => this.handelDeletedIngredient(e)} />
            </div>
          </div>
        ))}
        <button className="ui primary button" onClick={e => this.addIngredientField(e)}>
          Add ingredient
        </button>
      </div>
    );
  }

  render() {
    return <div>{this.renderIngredients()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(e => e.id === ownProps.match.params.id)
});

export default connect(
  mapStateToProps,
  { editRecipe }
)(RecipeIngredients);
