import React from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../helper/selectRecipe';
import SearchBar from './SearchBar';

const RecipeList = props => {
  const { recipes } = props;
  const recipeList = recipes.map(recipe => (
    <div key={recipe.id} className="ui segment">
      <a href={`/recipes/${recipe.id}`}>
        <h4 className="ui header">{recipe.name}</h4>
      </a>
    </div>
  ));

  return (
    <div className="ui segment">
      <h3 className="ui dividing header">Recipes</h3>
      <SearchBar />
      {recipeList}
    </div>
  );
};

const mapStateToProps = state => ({
  recipes: selectRecipe(state.recipes, state.textFilter, state.sortBy)
});

export default connect(mapStateToProps)(RecipeList);
