import React, { Component } from 'react';
import { getCars } from '../actions/cars';
import { connect } from 'react-redux';


class HomeContainer extends Component {
  componentDidMount() {
    this.props.getInitialCars();
  }

  render() {
    return (
      <div>
        HomeContainer
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialCars: () => {
      //dispatch redux thunk action creator
      dispatch(getCars());
    }
  }
}


export default connect(null, mapDispatchToProps)(HomeContainer);
