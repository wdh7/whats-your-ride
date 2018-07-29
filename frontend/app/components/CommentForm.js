import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CommentForm({ handleSubmit, handleInput, isDisabled }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="comment">Comment</Label>
        <Input type="textarea" name="comment" id="comment" onChange={handleInput} />
      </FormGroup>
      <Button color='primary' disabled={isDisabled}>Add Comment</Button>
    </Form>
  )
}

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default CommentForm;
