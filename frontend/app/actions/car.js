import { getCar, getComments } from '../helpers/car';

// ACTION TYPE CONSTANTS
export const GET_CAR_AND_COMMENTS_START = 'GET_CAR_AND_COMMENTS_START';
export const GET_CAR_AND_COMMENTS_SUCCESS = 'GET_CAR_AND_COMMENTS_SUCCESS';
export const GET_CAR_AND_COMMENTS_ERROR = 'GET_CAR_AND_COMMENTS_ERROR';


// ACTIONS CREATORS
function getCarInfoStart() {
  return {
    type: GET_CAR_AND_COMMENTS_START
  }
}

function getCarInfoSuccess(car, comments) {
  return {
    type: GET_CAR_AND_COMMENTS_SUCCESS,
    car,
    comments
  }
}

function getCarInfoError(error) {
  return {
    type: GET_CAR_AND_COMMENTS_ERROR,
    error
  }
}


// REDUX THUNK ACTION CREATOR
export function getCarInfo(id) {
  return (dispatch) => {
    dispatch(getCarInfoStart());

    // make the GET request for the car and comments
    Promise.all([
      getCar(id),
      getComments(id)
    ]).then(([ cars, comments ]) => {
      dispatch(getCarInfoSuccess(cars, comments.comments));
    })
    .catch(error => dispatch(getCarInfoError(error.message)))
  }
}
