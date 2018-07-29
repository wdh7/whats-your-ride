import { getCar, getComments } from '../helpers/car';

// ACTION TYPE CONSTANTS
export const GET_CAR_AND_COMMENTS_START = 'GET_CAR_AND_COMMENTS_START';
export const GET_CAR_AND_COMMENTS_SUCCESS = 'GET_CAR_AND_COMMENTS_SUCCESS';
export const GET_CAR_AND_COMMENTS_ERROR = 'GET_CAR_AND_COMMENTS_ERROR';

export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';

export const ADD_COMMENT_START = 'ADD_COMMENT_START';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';


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

function deleteCarSuccess() {
  return {
    type: DELETE_CAR_SUCCESS
  }
}

function addCommentStart() {
  return {
    type: ADD_COMMENT_START
  }
}

function addCommentSuccess(comment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment
  }
}

function addCommentError(error) {
  return {
    type: ADD_COMMENT_ERROR,
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

export function deleteCar(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }

  return (dispatch) => {
    return fetch(`/api/cars/${id}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Deleting car error');
        }

        return res.json();
      })
      .then(() => {
        dispatch(deleteCarSuccess());
        return { success: true};
      })
  }
}

export function submitComment(comment, carId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({
      comment: { text: comment }
    })
  }

  return (dispatch) => {
    dispatch(addCommentStart());

    return fetch(`/api/cars/${carId}/comments`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Deleting car error');
        }

        return res.json();
      })
      .then(({ comment }) => {
        dispatch(addCommentSuccess(comment));
      })
      .catch(error => dispatch(addCommentError(error.message)))
  }
}
