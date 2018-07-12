import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_ERROR } from '../actions/cars';


const initialState = {
  isFetching: false,
  error: null,
  cars: []
}

function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cars: action.cars
      }
    case FETCH_CARS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}


export default carsReducer;
