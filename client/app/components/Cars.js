import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarImageCard from './CarImageCard';

function Cars({ cars }) {
  return (
    <ul className='cars-list'>
      {cars.map(car => <CarImageCard car={car} key={car._id} />)}
    </ul>
  )
}

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Cars;
