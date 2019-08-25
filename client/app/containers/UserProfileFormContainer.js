import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Form, Field, withFormik } from 'formik';
import { resetForm } from '../helpers/resetForm';
import { Button, FormGroup, Label } from 'reactstrap';
import ShowAlert from '../components/ShowAlert';
import { register } from '../actions/auth';
import { resetProfileSuccess } from '../actions/profile';

class UserProfileFormContainer extends Component {
  state = {
    username: '',
    password: '',
    location: '',
    tagline: '',
    img: '',
  };

  componentWillUnmount() {
    this.props.resetProfileSuccess();
  }

  render() {
    const { regErrorMsg, updateSuccessMsg, updateErrorMsg } = this.props.auth;
    const path = this.props.location.pathname;
    const { errors, touched } = this.props;

    return (
      <div className='profile-wrapper'>
        {regErrorMsg ? <ShowAlert color='danger' text={regErrorMsg} /> : null}

        {updateSuccessMsg ? <ShowAlert color='success' text={updateSuccessMsg} /> : null}

        {updateErrorMsg ? <ShowAlert color='danger' text={updateErrorMsg} /> : null}

        <h3>Register</h3>
        <Form>
          <FormGroup>
            <Label for='username'>Username *</Label>
            <Field id='username' name='username' />
            {errors.username && touched.username && <p className='error-msg'>{errors.username}</p>}
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password *</Label>
            <Field id='password' name='password' type='password' />
            {errors.password && touched.password && <p className='error-msg'>{errors.password}</p>}
          </FormGroup>
          <FormGroup>
            <Label for='location'>Location *</Label>
            <Field id='location' name='location' />
            {errors.location && touched.location && <p className='error-msg'>{errors.location}</p>}
          </FormGroup>
          <FormGroup>
            <Label for='tagline'>Tagline</Label>
            <Field id='tagline' name='tagline' />
            {errors.tagline && touched.tagline && <p className='error-msg'>{errors.tagline}</p>}
          </FormGroup>
          <FormGroup>
            <Label for='img'>Image Link</Label>
            <Field id='img' name='img' />
            {errors.img && touched.img && <p className='error-msg'>{errors.img}</p>}
          </FormGroup>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </Form>
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
    register: (formData) => dispatch(register(formData)),
    resetProfileSuccess: () => dispatch(resetProfileSuccess()),
  };
}

const UserProfileSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum of 3 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
      'Password must include at least one character and one number'
    )
    .required('Password is required'),
  location: Yup.string().required('Location is required'),
  tagline: Yup.string(),
  img: Yup.string(),
});

const UserProfileFormik = withFormik({
  mapPropsToValues: () => ({ username: '', password: '', location: '', tagline: '', img: '' }),
  validationSchema: UserProfileSchema,
  handleSubmit: (values, { props }) => {
    props.register(values).then((res) => {
      if (res.redirect) {
        props.history.push('/login');
      } else {
        resetForm.call(this, this.state);
      }
    });
  },
})(UserProfileFormContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileFormik);
