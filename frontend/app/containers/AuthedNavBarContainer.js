import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthedNavBar from '../components/AuthedNavBar';
import { logOutUser } from '../actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logOutUser());
    }
  }
}

export default connect(null, mapDispatchToProps)(AuthedNavBar);
