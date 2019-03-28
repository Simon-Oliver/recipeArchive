import React from 'react';
import { connect } from 'react-redux';
import { searchRecipe, sortRecipe } from '../actions';

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

  onCheckBoxChange(e) {
    this.props.sortRecipe(e.target.checked);
  }

  render() {
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          value={this.state.search}
          onChange={e => this.onInputChange(e)}
        />
        <div>
          <input type="checkbox" id="sort" name="sort" onChange={e => this.onCheckBoxChange(e)} />
          <label htmlFor="sort">Sort A-Z</label>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { searchRecipe, sortRecipe }
)(Search);
