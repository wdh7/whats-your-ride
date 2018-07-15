// ACTION TYPE CONSTANTS
export const GET_CAR_START = 'GET_CAR_START';
export const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS';
export const GET_CAR_ERROR = 'GET_CAR_ERROR';


// ACTIONS CREATORS
function getCarStart() {
  return {
    type: GET_CAR_START
  }
}

function getCarSuccess(car) {
  return {
    type: GET_CAR_SUCCESS,
    car
  }
}

function getCarError(error) {
  return {
    type: GET_CAR_ERROR,
    error
  }
}


// REDUX THUNK ACTION CREATOR
export function getCar(id) {
  return (dispatch) => {
    dispatch(getCarStart());

    // make the GET request for the car
    fetch(`/api/cars/${id}`)
      .then(res => {
        if (!res.ok) {
          // bad response
          throw new Error(`${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then(({ car }) => dispatch(getCarSuccess(car))) // update state with returned car
      .catch(error => dispatch(getCarError(error.message))) // update state with error
  }
}
