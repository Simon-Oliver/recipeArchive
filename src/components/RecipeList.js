import React from 'react';
import { connect } from 'react-redux';

const RecipeList = props => {
  const { recipes } = props;
  const recipeList = recipes.map(recipe => (
    <div className="ui segment">
      <a href={`/recipes/${recipe.id}`}>
        <h4 className="ui header">{recipe.name}</h4>
      </a>
    </div>
  ));

  return (
    <div className="ui segment">
      <h3 className="ui dividing header">Recipes</h3>
      {recipeList}
    </div>
  );
};

const mapStateToProps = state => ({ recipes: state.recipes });

export default connect(mapStateToProps)(RecipeList);
