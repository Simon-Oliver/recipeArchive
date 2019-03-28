import React from 'react';
import { connect } from 'react-redux';
import searchFilter from '../helper/searchFilter';
import { deleteRecipe } from '../actions';

const mapStateToProps = state => ({ recipes: state.recipes, filter: state.filter });

const List = ({ recipes, filter, deleteRecipe }) => (
  <ul>
    {searchFilter(recipes, filter).map(recipe => (
      <div>
        <li key={recipe.id}>{recipe.title}</li>
        <button onClick={() => deleteRecipe(recipe.id)}>X</button>
      </div>
    ))}
  </ul>
);

export default connect(
  mapStateToProps,
  { deleteRecipe }
)(List);
