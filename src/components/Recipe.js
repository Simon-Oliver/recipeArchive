import React from 'react';
import { connect } from 'react-redux';
import '../style/button.css';
import { deleteRecipe } from '../actions';

const Recipe = props => {
  const { name, recipeIngredient, recipeInstructions } = props.recipe[0];
  const regex = /\n+/gm;
  const formatedString = recipeInstructions.replace(regex, '<br>');

  const onButtonClick = () => {
    props.history.push(`/recipes/edit/${props.match.params.id}`);
  };

  const onDeleteClick = () => {
    props.deleteRecipe(props.match.params.id);
    props.history.push(`/recipes`);
  };

  return (
    <div className="ui segment">
      <h2 className="ui dividing header ">{name} </h2>

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
      <div className="ui small basic icon buttons">
        <button onClick={onButtonClick} className="ui button">
          <i className="edit icon" />
        </button>
        <button onClick={onDeleteClick} className="ui button">
          <i className="trash icon deleteRecipe" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(recipe => recipe.id === ownProps.match.params.id)
});

export default connect(
  mapStateToProps,
  { deleteRecipe }
)(Recipe);
