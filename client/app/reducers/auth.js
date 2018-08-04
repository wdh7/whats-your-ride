import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/auth';

import {
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  RESET_PROFILE_SUCCESS
} from '../actions/profile';


const initialState = {
  fetchInProgress: false,
  regSuccessMsg: '',
  regErrorMsg: '',
  authedUser: {},
  authedErrorMsg: '',
  updateSuccessMsg: '',
  updateErrorMsg: ''
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
    case UPDATE_PROFILE_START:
      return {
        ...state,
        fetchInProgress: true,
        regErrorMsg: '',
        authedErrorMsg: '',
        updateErrorMsg: ''
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
        authedUser: {},
        regSuccessMsg: ''
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        fetchInProgress: false,
        authedUser: action.user,
        updateSuccessMsg: action.success,
        updateErrorMsg: ''
      }
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        fetchInProgress: false,
        updateErrorMsg: action.error
      }
    case RESET_PROFILE_SUCCESS:
      return {
        ...state,
        updateSuccessMsg: ''
      }
    default:
      return state;
  }
}


export default authReducer;
