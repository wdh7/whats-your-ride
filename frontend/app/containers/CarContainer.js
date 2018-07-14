import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCar } from '../actions/car';

class CarContainer extends Component {
  componentDidMount() {
    // Get the car id from the url param
    const carId = this.props.match.params.id;
    console.log(carId);

    // GET car by id
    this.props.getCar(carId);
  }

  render() {
    return (
      <div>
        Car Container
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    car: state.car
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCar: (id) => {
      dispatch(getCar(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
