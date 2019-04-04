import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';

const EditRecipe = props => <RecipeForm recipe={props.recipe} history={props.history} />;

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.filter(e => e.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(EditRecipe);
