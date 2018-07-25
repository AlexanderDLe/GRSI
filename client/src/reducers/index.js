import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import testimonialsReducer from './testimonialsReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  testimonials: testimonialsReducer
});
