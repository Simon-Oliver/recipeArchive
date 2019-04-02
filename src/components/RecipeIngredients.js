import React from 'react';

class RecipeIngredients extends React.Component {
  state = {
    recipeIngredient: []
  };

  componentDidMount() {
    if (this.props.recipeIngredient) {
      this.setState(() => ({ recipeIngredient: [...this.props.recipeIngredient] }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.onRecipeIngredientChange(this.state.recipeIngredient);
    }
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
    return <div className="field">{this.renderIngredients()}</div>;
  }
}

export default RecipeIngredients;
