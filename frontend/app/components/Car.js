import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

function Car({ car }) {
  return (
    <div className='car-details'>
      <div className='car-img'>
        <img src={car.img} alt={`${car.make} ${car.model} Image`} />
      </div>

      <div className='car-info'>
        <span>Make: {car.make}</span>
        <span>Model: {car.model}</span>
        <span>Year: {car.year}</span>
        <span>Description: {car.description}</span>
        <span className='last-updated'>Last Updated: {new Date(car.updatedAt).toDateString()}</span>

        <User user={car.owner} />
      </div>
    </div>
  )
}

Car.propTypes = {
  car: PropTypes.object.isRequired
}


export default Car;
