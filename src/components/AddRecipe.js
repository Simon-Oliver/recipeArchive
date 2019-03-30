import React from 'react';

class AddRecipe extends React.Component {
  state = {
    recipeIngredient: ['almonds', 'flour'],
    name: '',
    recipeInstructions: '',
    recipeYield: '',
    currentIngredient: ''
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

  handleOnInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderForm() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={e => this.handleOnInputChange(e)}
          />
        </div>
        <div>
          {this.state.recipeIngredient.map((e, i) => (
            <div key={`recipeIngredient${i}`}>
              <label htmlFor={`recipeIngredient${i}`}>{`Ingredient ${i + 1}`}</label>
              <input
                type="text"
                id={`recipeIngredient${i}`}
                name={`recipeIngredient${i}`}
                value={e}
                onChange={f => this.handleOnRecipeInputChange(f, i)}
              />
              <button onClick={() => this.handelDeletedIngredient(e)}>X</button>
            </div>
          ))}
        </div>
        <button onClick={e => this.addIngredientField(e)}>Add ingredient</button>
      </div>
    );
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default AddRecipe;
