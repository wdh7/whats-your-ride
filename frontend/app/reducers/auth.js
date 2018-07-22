import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/auth';


const initialState = {
  fetchInProgress: false,
  regSuccessMsg: '',
  regErrorMsg: '',
  authedUser: {},
  authedErrorMsg: ''
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return {
        ...state,
        fetchInProgress: true,
        regErrorMsg: '',
        authedErrorMsg: ''
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        fetchInProgress: false,
        regSuccessMsg: action.message,
        regErrorMsg: ''
      }
    case REGISTER_ERROR:
      return {
        ...state,
        fetchInProgress: false,
        regErrorMsg: action.error
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchInProgress: false,
        authedUser: action.user
      }
    case LOGIN_ERROR:
      return {
        ...state,
        fetchInProgress: false,
        authedErrorMsg: action.error
      }
    case LOGOUT:
      localStorage.removeItem('jwt');
      return {
        ...state,
        authedUser: {}
      }
    default:
      return state;
  }
}


export default authReducer;
