import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortBy } from '../actions';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    sortBy: 'date'
  };

  onInputChange = e => {
    const searchTerm = e.target.value;
    this.setState({ ...this.state, searchTerm }, () =>
      this.props.setTextFilter(this.state.searchTerm)
    );
  };

  onFilterChange = e => {
    this.setState({ ...this.state, sortBy: e.target.value }, () =>
      this.props.sortBy(this.state.sortBy)
    );
  };

  render() {
    return (
      <div className="ui form">
        <div className="inline fields">
          <label>Sort By:</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="sortByDate"
                value="date"
                checked={this.state.sortBy === 'date'}
                onChange={e => this.onFilterChange(e)}
              />
              <label>Sort by date</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="sortByAz"
                value="az"
                checked={this.state.sortBy === 'az'}
                onChange={e => this.onFilterChange(e)}
              />
              <label>A-Z</label>
            </div>
          </div>
        </div>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={e => this.onInputChange(e)}
          />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { setTextFilter, sortBy }
)(SearchBar);
