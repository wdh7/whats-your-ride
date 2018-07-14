import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function CarImageCard({ car }) {
  return (
    <div className='card'>
      <img src={car.img} alt={`${car.make} ${car.model} Image`} />
      <div className='card-bottom'>
        <Button color='link'>View</Button>
      </div>
    </div>
  )
}

CarImageCard.propTypes = {
  car: PropTypes.object.isRequired
}


export default CarImageCard;
