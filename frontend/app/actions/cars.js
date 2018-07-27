// ACTION TYPES
export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

export const ADD_CAR_START = 'ADD_CAR_START';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_ERROR = 'ADD_CAR_ERROR';


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

function addCarStart() {
  return {
    type: ADD_CAR_START
  }
}

function addCarSuccess(car) {
  return {
    type: ADD_CAR_SUCCESS,
    car
  }
}

function addCarError(error) {
  return {
    type: ADD_CAR_ERROR,
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
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`)
        }

        return res.json();
      })
      .then(({ cars }) => {
        // if successful, update state with received cars
        dispatch(getCarsSuccess(cars));
      })
      .catch(error => dispatch(getCarsError(error.message))) // update state with error
  }
}


// ADD CAR TO DB
export function addNewCar(car) {
  const token = localStorage.getItem('jwt');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ car })
  }

  return (dispatch) => {
    // Start
    dispatch(addCarStart());

    // Make the POST
    return fetch('/api/cars', options)
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`);
        }

        return res.json();
      })
      .then(({ car }) => {
        dispatch(addCarSuccess(car));
        return { success: true }
      })
      .catch(error => dispatch(addCarError(error.message)))
  }
}
