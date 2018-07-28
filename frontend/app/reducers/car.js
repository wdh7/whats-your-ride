import {
  GET_CAR_AND_COMMENTS_START,
  GET_CAR_AND_COMMENTS_SUCCESS,
  GET_CAR_AND_COMMENTS_ERROR,
  DELETE_CAR_SUCCESS
} from '../actions/car';


const initialState = {
  isLoading: false,
  error: null,
  car: {},
  comments: []
}

function carReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAR_AND_COMMENTS_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CAR_AND_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        car: action.car,
        comments: action.comments
      }
    case GET_CAR_AND_COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case DELETE_CAR_SUCCESS:
      return {
        ...state,
        car: {},
        comments: []
      }
    default:
      return state;
  }
}


export default carReducer;
