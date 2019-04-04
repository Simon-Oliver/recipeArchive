import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRecipe from '../components/AddRecipe';
import Home from '../components/Home';
import RecipeList from '../components/RecipeList';
import Recipe from '../components/Recipe';
import EditRecipe from '../components/EditRecipe';
import Header from '../components/Header';

const AppRouter = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/new" component={AddRecipe} />
          <Route path="/recipes/edit/:id" component={EditRecipe} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route path="/recipes" component={RecipeList} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
