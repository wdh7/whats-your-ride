import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CarImageCard({ car }) {
  const imgStyles = {
    backgroundImage: `url(${car.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='card'>
      <div className='card-img' style={imgStyles}></div>
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
