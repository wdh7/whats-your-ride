import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCar } from '../actions/car';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Car from '../components/Car';

class CarContainer extends Component {
  componentDidMount() {
    // Get the car id from the url param
    const carId = this.props.match.params.id;

    // GET car by id
    this.props.getCar(carId);
  }

  render() {
    const { isLoading, error, car } = this.props.car;

    if (isLoading) {
      return <Loading />
    }

    if (error) {
      return <Error message={error.message} />
    }

    if (car.make && car.owner.username) {
      return <Car car={car} />
    } else {
      return null
    }
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
