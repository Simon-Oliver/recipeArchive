import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return null;
  }
}

export default connect(
  null,
  { getData }
)(Posts);
