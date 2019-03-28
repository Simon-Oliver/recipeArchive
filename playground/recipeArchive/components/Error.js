import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ isError: state.isError });

const Error = ({ isError }) => <div>{isError}</div>;

export default connect(mapStateToProps)(Error);
