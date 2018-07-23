import React, { Component } from 'react';
import { connect } from 'react-redux';

// Form for both user registration and profile update
import UserProfileForm from '../components/UserProfileForm';

// Registration
import { register } from '../actions/auth';
import { resetForm } from '../helpers/resetForm';

// Edit Profile
import { removeEmptyData } from '../helpers/removeEmptyData';
import { updateUserProfile, resetProfileSuccess } from '../actions/profile';


class UserProfileFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      location: '',
      tagline: '',
      img: ''
    }
  }

  // update state with user input from the form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Submit user form data to the backend.
  // If successful in registering, redirect to '/login' path
  handleRegSubmit = (e) => {
    e.preventDefault();
    // reset the form fields
    e.target.reset();

    this.props.register(this.state)
      .then(res => {
        if (res.redirect) {
          // Success block: redirect to login page
          this.props.history.push('/login');
        } else {
          // Error block: reset component state so user can re-enter registration info
          resetForm.call(this, this.state);
        }
      })
  }

  // Submit updated profile info to backend.
  handleProfileSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    const currentUser = this.props.auth.authedUser.username;
    const filteredData = removeEmptyData(this.state);

    this.props.updateProfile(filteredData, currentUser);
  }

  componentWillUnmount() {
    // Remove update profile success message when user
    // navigates to a different path
    this.props.resetProfileSuccess();
  }


  render() {
    const { regErrorMsg, updateSuccessMsg, updateErrorMsg } = this.props.auth;
    const path = this.props.location.pathname;

    if (path === '/register') {
      return <UserProfileForm
                handleChange={this.handleChange}
                handleSubmit={this.handleRegSubmit}
                regErrorMsg={regErrorMsg}
                formType='Registration'
              />
    }

    if (path === '/profile') {
      return <UserProfileForm
                handleChange={this.handleChange}
                handleSubmit={this.handleProfileSubmit}
                updateSuccessMsg={updateSuccessMsg}
                updateErrorMsg={updateErrorMsg}
                formType='Edit Profile'
              />
    }
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: (formData) => {
      return dispatch(register(formData));
    },
    updateProfile: (data, currentUserName) => {
      dispatch(updateUserProfile(data, currentUserName));
    },
    resetProfileSuccess: () => {
      dispatch(resetProfileSuccess());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileFormContainer);
