import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CarImageCard({ car }) {
  return (
    <div className='card'>
      <img src={car.img} alt={`${car.make} ${car.model} Image`} />
      <div className='card-bottom'>
        <Link to={`/cars/${car._id}`}>
          <Button color='link'>
            View
          </Button>
        </Link>
      </div>
    </div>
  )
}

CarImageCard.propTypes = {
  car: PropTypes.object.isRequired
}


export default CarImageCard;
