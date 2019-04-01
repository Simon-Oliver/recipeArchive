import React from 'react';
import { connect } from 'react-redux';

const Recipe = props => {
  const { name, recipeIngredient, recipeInstructions } = props.recipe[0];
  const regex = /\n+/gm;
  const formatedString = recipeInstructions.replace(regex, '<br>');

  return (
    <div className="ui segment">
      <h2 className="ui dividing header ">{name}</h2>
      <div className="ui basic segment">
        <h4 className="ui header">Ingredients:</h4>
        <div className="ui bulleted list">
          {recipeIngredient.map(e => (
            <div className="item">{e}</div>
          ))}
        </div>
      </div>
      <div className="ui basic segment">
        <h4 className="ui header">Method:</h4>
        <p dangerouslySetInnerHTML={{ __html: formatedString }} />
      </div>
      <button className="ui positive button">Edit</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(recipe => recipe.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(Recipe);
