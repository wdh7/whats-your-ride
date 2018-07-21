import { combineReducers } from 'redux';
import carsReducer from './cars';
import carReducer from './car';
import authReducer from './auth';

const rootReducer = combineReducers({
  cars: carsReducer,
  car: carReducer,
  auth: authReducer
});


export default rootReducer;
