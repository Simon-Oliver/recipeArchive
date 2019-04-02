import React from 'react';
import { connect } from 'react-redux';
import uniqId from 'uniqid';
import { addRecipe } from '../actions';
import RecipeIngredients from './RecipeIngredients';

class AddRecipe extends React.Component {
  state = {
    recipeIngredient: [],
    name: '',
    recipeInstructions: '',
    recipeYield: '',
    id: uniqId()
  };

  onRecipeIngredientChange = ingredients => {
    this.setState({ recipeIngredient: ingredients });
  };

  // addIngredientField(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({ recipeIngredient: [...prevState.recipeIngredient, ''] }));
  // }

  // handleOnRecipeInputChange(e, i) {
  //   const val = e.target.value;
  //   this.setState(prevState => {
  //     const newIngredients = [...prevState.recipeIngredient];
  //     newIngredients[i] = val;
  //     return { recipeIngredient: newIngredients };
  //   });
  // }

  // handelDeletedIngredient(e) {
  //   const { recipeIngredient } = this.state;
  //   const val = e;
  //   const array = [...recipeIngredient]; // make a separate copy of the array
  //   const index = array.indexOf(val);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({ recipeIngredient: array });
  //   }
  // }

  handelOnSubmit(e) {
    e.preventDefault();
    this.props.addRecipe(this.state);
    this.setState({
      recipeIngredient: [],
      name: '',
      recipeInstructions: '',
      recipeYield: '',
      id: uniqId()
    });
  }

  handleOnInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // renderIngredients() {
  //   return (
  //     <div className="field">
  //       <label htmlFor="recipeIngredient">Ingredients:</label>

  //       {this.state.recipeIngredient.map((e, i) => (
  //         <div className="ui basic segment" key={`recipeIngredient${i}`}>
  //           <div className="ui right icon input">
  //             <input
  //               type="text"
  //               id={`recipeIngredient${i}`}
  //               name={`recipeIngredient${i}`}
  //               value={e}
  //               onChange={f => this.handleOnRecipeInputChange(f, i)}
  //             />
  //             <i className="close link icon" onClick={() => this.handelDeletedIngredient(e)} />
  //           </div>
  //         </div>
  //       ))}

  //       <button className="ui primary button" onClick={e => this.addIngredientField(e)}>
  //         Add ingredient
  //       </button>
  //     </div>
  //   );
  // }

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
        <RecipeIngredients
          ingredients={this.state.recipeIngredient}
          onRecipeIngredientChange={this.onRecipeIngredientChange}
        />
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

export default connect(
  null,
  { addRecipe }
)(AddRecipe);
