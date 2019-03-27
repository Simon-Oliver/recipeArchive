import React from 'react';
import { connect } from 'react-redux';
import searchFilter from '../helper/searchFilter';

const mapStateToProps = state => ({ recipes: state.recipes, filter: state.filter });

const List = ({ recipes, filter }) => (
  <ul>
    {searchFilter(recipes, filter).map(recipe => (
      <li key={recipe.id}>{recipe.title}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
