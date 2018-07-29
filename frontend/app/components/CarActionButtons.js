import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import CarModalContainer from '../containers/CarModalContainer';

function CarActionButtons({ deleteCar, carId, isDisabled }) {
  return (
    <div className='car-actions'>
      <div className='space'>
        <Button disabled={isDisabled} color='danger' size='sm' onClick={() => deleteCar(carId)}>
          Delete
        </Button>
      </div>
      <CarModalContainer label='Edit Car'>
        <Button color='info' size='sm' disabled={isDisabled}>Edit</Button>
      </CarModalContainer>
    </div>
  )
}

CarActionButtons.propTypes = {
  deleteCar: PropTypes.func.isRequired,
  carId: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default CarActionButtons;
