import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ recipes: state.recipes });

const List = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => (
      <li key={recipe.id}>{recipe.title}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
