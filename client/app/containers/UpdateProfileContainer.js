import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { removeEmptyData } from '../helpers/removeEmptyData';
import { Button, FormGroup, Label } from 'reactstrap';
import ShowAlert from '../components/ShowAlert';
import { updateUserProfile, resetProfileSuccess } from '../actions/profile';

const UserProfileSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum of 3 characters')
    .required('Username is required'),
  location: Yup.string().required('Location is required'),
  tagline: Yup.string(),
  img: Yup.string(),
});

class UpdateProfileContainer extends Component {
  componentWillUnmount() {
    this.props.resetProfileSuccess();
  }

  render() {
    const { regErrorMsg, updateSuccessMsg, updateErrorMsg, authedUser } = this.props.auth;
    const path = this.props.location.pathname;
    const { errors, touched } = this.props;

    return (
      <div className='profile-wrapper'>
        {regErrorMsg ? <ShowAlert color='danger' text={regErrorMsg} /> : null}

        {updateSuccessMsg ? <ShowAlert color='success' text={updateSuccessMsg} /> : null}

        {updateErrorMsg ? <ShowAlert color='danger' text={updateErrorMsg} /> : null}

        <Formik
          initialValues={{ ...authedUser }}
          validationSchema={UserProfileSchema}
          onSubmit={(values) => {
            const currentUser = this.props.auth.authedUser.username;
            const filteredData = removeEmptyData(values);

            this.props.updateProfile(filteredData, currentUser);
          }}
        >
          {({ errors, values }) => (
            <div>
              <h3>Profile</h3>
              <Form>
                <FormGroup>
                  <Label for='username'>Username *</Label>
                  <Field id='username' name='username' />
                  {errors.username && touched.username && (
                    <p className='error-msg'>{errors.username}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for='location'>Location *</Label>
                  <Field id='location' name='location' />
                  {errors.location && touched.location && (
                    <p className='error-msg'>{errors.location}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for='tagline'>Tagline</Label>
                  <Field id='tagline' name='tagline' />
                  {errors.tagline && touched.tagline && (
                    <p className='error-msg'>{errors.tagline}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for='img'>Image Link</Label>
                  <Field id='img' name='img' />
                  {errors.img && touched.img && <p className='error-msg'>{errors.img}</p>}
                </FormGroup>
                <Button type='submit' color='primary'>
                  Update
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (data, currentUserName) => dispatch(updateUserProfile(data, currentUserName)),
    resetProfileSuccess: () => dispatch(resetProfileSuccess()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileContainer);
