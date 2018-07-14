import { combineReducers } from 'redux';
import carsReducer from './cars';
import carReducer from './car';

const rootReducer = combineReducers({
  cars: carsReducer,
  car: carReducer
});


export default rootReducer;
