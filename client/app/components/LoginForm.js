import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function LoginForm({ handleInput, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" onChange={handleInput} />
      </FormGroup>
      <Link to='/register'>
        <Button color='link' className='remove-left-padding'>
          Not a member? Register now
        </Button>
      </Link><br />
      <Button color='primary'>Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default LoginForm
