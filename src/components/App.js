import React from 'react';
import List from './List';
import Form from './Form';
import Posts from './Posts';
import Search from './Search';
import Error from './Error';

const App = () => (
  <div className="ui container">
    <Search />
    <List />
    <Form />
    <Error />
    <Posts />
  </div>
);

export default App;
