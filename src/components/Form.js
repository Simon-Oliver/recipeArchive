import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { addRecipe } from '../actions';

class Form extends Component {
  state = { title: '' };

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uniqid();
    this.props.addRecipe({ title, id });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={e => this.handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addRecipe }
)(Form);
