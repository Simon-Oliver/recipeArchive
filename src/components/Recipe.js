import React from 'react';
import { connect } from 'react-redux';

const Recipe = props => {
  console.log(props);

  const { name, recipeIngredient, recipeInstructions } = props.recipe[0];
  return (
    <div className="ui segment">
      <h2 className="ui dividing header ">{name}</h2>
      <div className="ui vertical segment">
        <h4 className="ui header">Ingredients:</h4>
        <div className="ui bulleted list">
          {recipeIngredient.map(e => (
            <div className="item">{e}</div>
          ))}
        </div>
      </div>
      <div className="ui vertical segment">
        <h4 className="ui header">Method:</h4>
        <p>{recipeInstructions}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(recipe => recipe.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(Recipe);
