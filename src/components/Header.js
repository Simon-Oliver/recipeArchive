import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu">
    <NavLink to="/recipes" className="item" activeClassName="active" exact>
      All Recipes
    </NavLink>
    <NavLink to="/recipes/new" className="item" activeClassName="active">
      Add Recipe
    </NavLink>
    <div className="right menu">
      <a href="/" className="ui item">
        Logout
      </a>
    </div>
  </div>
);

export default Header;
