import React from 'react';
import { connect } from 'react-redux';
import { searchRecipe } from '../actions';

class Search extends React.Component {
  state = {
    search: ''
  };

  onInputChange(e) {
    this.setState({ search: e.target.value });
    this.props.searchRecipe(e.target.value);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({ search: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <label>Search</label>
        <input type="text" value={this.state.search} onChange={e => this.onInputChange(e)} />
      </form>
    );
  }
}

export default connect(
  null,
  { searchRecipe }
)(Search);
