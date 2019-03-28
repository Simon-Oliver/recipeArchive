import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import Form from './Form';
import Posts from './Posts';
import Search from './Search';
import Error from './Error';

const mapStateToProps = state => ({ isError: state.isError });

const App = props => (
  <div className="ui container">
    <Search />
    <List />
    <Form />
    {props.isError && <Error />}
    <Posts />
  </div>
);

export default connect(mapStateToProps)(App);
