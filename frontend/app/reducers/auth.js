import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/auth';


const initialState = {
  regInProgress: false,
  regSuccessMsg: '',
  regErrorMsg: ''
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        regInProgress: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        regInProgress: false,
        regSuccessMsg: action.message
      }
    case REGISTER_ERROR:
      return {
        ...state,
        regInProgress: false,
        regErrorMsg: action.error
      }
    default:
      return state;
  }
}


export default authReducer;
