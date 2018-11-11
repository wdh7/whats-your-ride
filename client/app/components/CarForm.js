import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

function CarForm({ handleInput }) {
  return (
    <Form>
      <FormGroup>
        <Label for="make">Make</Label>
        <Input type="text" name="make" id="make" onChange={handleInput} />
        <FormText>Field is required</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="model">Model</Label>
        <Input type="text" name="model" id="model" onChange={handleInput} />
        <FormText>Field is required</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="year">Year</Label>
        <Input type="text" name="year" id="year" onChange={handleInput} />
        <FormText>Field is required</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" onChange={handleInput} />
        <FormText>Field is required</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="img">Image</Label>
        <Input type="text" name="img" id="img" onChange={handleInput} />
      </FormGroup>
    </Form>
  )
}

CarForm.propTypes = {
  handleInput: PropTypes.func.isRequired
}

export default CarForm;
