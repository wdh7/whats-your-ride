// ACTION TYPES
export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';


// ACTION CREATORS
function getCarsRequest() {
  return {
    type: FETCH_CARS_REQUEST
  }
}

function getCarsSuccess(cars) {
  return {
    type: FETCH_CARS_SUCCESS,
    cars
  }
}

function getCarsError(error) {
  return {
    type: FETCH_CARS_ERROR,
    error
  }
}


// REDUX THUNK ACTION CREATOR
export function getCars() {
  return (dispatch) => {
    // update state to show loading text on view
    dispatch(getCarsRequest());

    // make the GET request to get cars from the db
    fetch('/api/cars')
      .then(response => response.json())
      .then(({ cars }) => {
        // if successful, update state with received cars
        dispatch(getCarsSuccess(cars));
      })
      .catch(error => dispatch(getCarsError(error))) // update state with error
  }
}
