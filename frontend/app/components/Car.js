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
        <span><b>Make:</b> {car.make}</span>
        <span><b>Model:</b> {car.model}</span>
        <span><b>Year:</b> {car.year}</span>
        <span><b>Description:</b> {car.description}</span>
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
