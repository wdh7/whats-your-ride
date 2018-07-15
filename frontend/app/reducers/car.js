import { GET_CAR_START, GET_CAR_SUCCESS, GET_CAR_ERROR } from '../actions/car';


const initialState = {
  isLoading: false,
  error: null,
  car: {}
}

function carReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAR_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        car: action.car
      }
    case GET_CAR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}


export default carReducer;
