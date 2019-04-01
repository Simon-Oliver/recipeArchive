import React from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../actions';

class EditRecipe extends React.Component {
  state = {
    recipeIngredient: [...this.props.recipe[0].recipeIngredient],
    name: this.props.recipe[0].name,
    recipeInstructions: this.props.recipe[0].recipeInstructions,
    recipeYield: this.props.recipe[0].recipeYield,
    id: this.props.recipe[0].id
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
    return (
      <form className="ui form segment" onSubmit={e => this.handelOnSubmit(e)}>
        <h3 className="ui dividing header">New Recipe:</h3>
        <div className="fields">
          <div className="twelve wide field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={e => this.handleOnInputChange(e)}
            />
          </div>
          <div className="four wide field">
            <label htmlFor="name">Yield:</label>
            <input
              type="text"
              id="recipeYield"
              name="recipeYield"
              value={this.state.recpeYield}
              onChange={e => this.handleOnInputChange(e)}
            />
          </div>
        </div>
        {this.renderIngredients()}
        <div className="field">
          <label htmlFor="recipeInstructions">Methode:</label>
          <textarea
            type="textbox"
            id="recipeInstructions"
            name="recipeInstructions"
            value={this.state.recipeInstructions}
            onChange={e => this.handleOnInputChange(e)}
          />
        </div>
        <button className="ui positive button" type="submit">
          Update Recipe
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.filter(e => e.id === ownProps.match.params.id);
  return { recipe };
};

export default connect(
  mapStateToProps,
  { editRecipe }
)(EditRecipe);
