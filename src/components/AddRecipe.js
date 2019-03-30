import React from 'react';

class AddRecipe extends React.Component {
  state = {
    recipeIngredient: ['almonds', 'flour'],
    name: '',
    recipeInstructions: '',
    recipeYield: ''
  };

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
    console.log(this.state);
  }

  handleOnInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderIngredients() {
    return (
      <div className="field">
        <div className="ui segment">
          <label htmlFor="recipeIngredient">Ingredients:</label>
          {this.state.recipeIngredient.map((e, i) => (
            <div className="ui vertical segment" key={`recipeIngredient${i}`}>
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
        </div>
        <button className="ui primary button" onClick={e => this.addIngredientField(e)}>
          Add ingredient
        </button>
      </div>
    );
  }

  render() {
    return (
      <form className="ui form segment" onSubmit={e => this.handelOnSubmit(e)}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={e => this.handleOnInputChange(e)}
          />
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
          Add Recipe
        </button>
      </form>
    );
  }
}

export default AddRecipe;
