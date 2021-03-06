import React, { Component } from 'react';
import { getCars } from '../actions/cars';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Cars from '../components/Cars';
import CarModalContainer from './CarModalContainer';
import NewCarIcon from '../components/NewCarIcon';


class HomeContainer extends Component {
  componentDidMount() {
    this.props.getInitialCars();
  }

  render() {
    const { isLoading, error, cars } = this.props.cars;

    if (isLoading) {
      return (
        <Loading />
      )
    }

    if (error) {
      return (
        <Error message={error} />
      )
    }

    return (
      <div className='content'>
        {this.props.authedUser.jwt
          ? <CarModalContainer label='Create New Car'>
              <NewCarIcon />
            </CarModalContainer>
          : null
        }
        <Cars cars={cars} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.auth.authedUser,
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialCars: () => {
      // dispatch redux thunk action creator
      dispatch(getCars());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
