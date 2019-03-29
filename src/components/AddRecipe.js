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
    console.log(e.target);
    // this.setState(prevState => {
    //   const newIngredients = [...prevState.recipeIngredient];
    //   newIngredients[i] = e.target.value;
    //   return { recipeIngredient: newIngredients };
    // });
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
