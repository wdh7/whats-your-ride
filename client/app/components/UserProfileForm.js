import React from 'react';
import PropTypes from 'prop-types';
import ShowAlert from './ShowAlert';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function UserProfileForm({
  handleChange,
  handleSubmit,
  regErrorMsg,
  updateSuccessMsg,
  updateErrorMsg,
  formType
}) {
  return (
    <div className='profile-wrapper'>

      {regErrorMsg
        ? <ShowAlert color='danger' text={regErrorMsg} />
        : null
      }

      {updateSuccessMsg
        ? <ShowAlert color='success' text={updateSuccessMsg} />
        : null
      }

      {updateErrorMsg
        ? <ShowAlert color='danger' text={updateErrorMsg} />
        : null
      }

      <h3>{formType}</h3>
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
        <Button color='primary'>Submit</Button>
      </Form>
    </div>
  )
}


UserProfileForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired
}

export default UserProfileForm;
