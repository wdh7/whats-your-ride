import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCarInfo } from '../actions/car';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Car from '../components/Car';
import Comments from '../components/Comments';
import CommentsCounter from '../components/CommentsCounter';


class CarContainer extends Component {
  componentDidMount() {
    const { match, getCarAndComments } = this.props;

    // Get the car id from the url param
    const carId = match.params.id;

    // GET car by id and GET comments
    getCarAndComments(carId);
  }

  render() {
    const { isLoading, error, car, comments } = this.props.car;

    if (isLoading) {
      return <Loading />
    }

    if (error) {
      return <Error message={error.message} />
    }

    if (car.make && car.owner.username) {
      return (
        <div className='car-section'>
          <Car car={car} />
          <CommentsCounter comments={comments} />
          <Comments comments={comments} />
        </div>
      )
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
    getCarAndComments: (id) => {
      dispatch(getCarInfo(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
