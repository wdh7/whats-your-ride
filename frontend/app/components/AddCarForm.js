import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddCarForm({ handleInput }) {
  return (
    <Form>
      <FormGroup>
        <Label for="make">Make</Label>
        <Input type="text" name="make" id="make" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="model">Model</Label>
        <Input type="text" name="model" id="model" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="year">Year</Label>
        <Input type="text" name="year" id="year" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="img">Image</Label>
        <Input type="text" name="img" id="img" onChange={handleInput} />
      </FormGroup>
    </Form>
  )
}

AddCarForm.propTypes = {
  handleInput: PropTypes.func.isRequired
}

export default AddCarForm;
