import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR,
  ADD_CAR_START,
  ADD_CAR_SUCCESS,
  ADD_CAR_ERROR
} from '../actions/cars';


const initialState = {
  isFetching: false,
  error: null,
  cars: []
}

function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
    case ADD_CAR_START:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cars: action.cars
      }
    case ADD_CAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cars: [action.car, ...state.cars]
      }
    case FETCH_CARS_ERROR:
    case ADD_CAR_ERROR:
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
