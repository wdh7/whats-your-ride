import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function RegisterForm({ handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" onChange={handleChange} placeholder='username must be min 3 characters' />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" placeholder='city, state' onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="tagline">Tagline</Label>
        <Input type="text" name="tagline" id="tagline" placeholder='enter your favorite tagline' onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="img">Image Link</Label>
        <Input type="text" name="img" id="img" placeholder='enter your image link' onChange={handleChange} />
      </FormGroup>
      <Button color='primary'>Register</Button>
    </Form>
  )
}


RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default RegisterForm;
