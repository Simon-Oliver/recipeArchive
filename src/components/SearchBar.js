import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onInputChange = e => {
    const searchTerm = e.target.value;
    this.setState({ ...this.state, searchTerm }, () =>
      this.props.setTextFilter(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={e => this.onInputChange(e)}
        />
        <i className="search icon" />
      </div>
    );
  }
}

export default connect(
  null,
  { setTextFilter }
)(SearchBar);
