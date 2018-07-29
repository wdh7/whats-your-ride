import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';
import TimeStamp from './TimeStamp';
import { Button } from 'reactstrap';

function Car({ car, authedUser, deleteCar }) {
  let isDisabled = authedUser.username === car.owner.username ? false : true;

  return (
    <div className='car-details'>
      <div className='car-img'>
        <img src={car.img} alt={`${car.make} ${car.model} Image`} />
      </div>

      <div className='car-info'>
        <span><b>Make:</b> {car.make}</span>
        <span><b>Model:</b> {car.model}</span>
        <span><b>Year:</b> {car.year}</span>
        <span><b>Description:</b> {car.description}</span>
        <TimeStamp label='Last Updated' time={car.updatedAt} />

        <User user={car.owner} />
      </div>

      <div>
        <Button
          color='danger'
          disabled={isDisabled}
          onClick={() => deleteCar(car._id)}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

Car.propTypes = {
  car: PropTypes.object.isRequired,
  authedUser: PropTypes.object.isRequired,
  deleteCar: PropTypes.func.isRequired
}


export default Car;
