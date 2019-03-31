import React from 'react';
import { connect } from 'react-redux';

const Recipe = props => {
  console.log(props);

  const { name, recipeIngredient, recipeInstructions } = props.recipe[0];
  return (
    <div className="ui segment">
      <h4 className="ui dividing header "> {name}</h4>
      <div className="ui vertical segment">
        <div className="ui bulleted list">
          {recipeIngredient.map(e => (
            <div className="item">{e}</div>
          ))}
        </div>
      </div>
      <div className="ui vertical segment">
        <p>{recipeInstructions}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(recipe => recipe.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(Recipe);
