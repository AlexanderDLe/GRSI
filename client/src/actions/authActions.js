import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { LOGIN_USER, GET_ERRORS } from './types';

// Login User - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post('/login', userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      // Set token to local storage
      localStorage.setItem('jwtToken', token);
      // Set token to auto header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set user
      dispatch(setUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged user
export const setUser = decoded => {
  return {
    type: LOGIN_USER,
    payload: decoded
  };
};

// Log User Out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set User to {} which will set isAuthenticated to false
  dispatch(setUser({}));
};
