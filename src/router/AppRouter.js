import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRecipe from '../components/AddRecipe';
import Home from '../components/Home';
import RecipeList from '../components/RecipeList';

const AppRouter = () => (
  <div className="ui container">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes/new" component={AddRecipe} />
        <Route path="/recipes" component={RecipeList} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
