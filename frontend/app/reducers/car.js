import {
  GET_CAR_AND_COMMENTS_START,
  GET_CAR_AND_COMMENTS_SUCCESS,
  GET_CAR_AND_COMMENTS_ERROR,
  DELETE_CAR_SUCCESS,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from '../actions/car';


const initialState = {
  isFetching: false,
  error: null,
  car: {},
  comments: []
}

function carReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAR_AND_COMMENTS_START:
    case ADD_COMMENT_START:
      return {
        ...state,
        isFetching: true
      }
    case GET_CAR_AND_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        car: action.car,
        comments: action.comments
      }
    case GET_CAR_AND_COMMENTS_ERROR:
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case DELETE_CAR_SUCCESS:
      return {
        ...state,
        car: {},
        comments: []
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comments: [action.comment, ...state.comments]
      }
    default:
      return state;
  }
}


export default carReducer;
