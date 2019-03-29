import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddRecipe from '../components/AddRecipe';
import Home from '../components/Home';
import RecipeList from '../components/RecipeList';

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" component={RecipeList} />
      <Route path="/recipes/new" component={AddRecipe} />
    </BrowserRouter>
  </div>
);

export default AppRouter;
