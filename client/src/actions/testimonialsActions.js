import axios from 'axios';

import {
  ADD_TESTIMONIAL,
  ERR_TESTIMONIAL,
  DEL_TESTIMONIAL,
  GET_TESTIMONIALS,
  GET_ERRORS,
  CLEAR_ERRORS
} from './types';

export const addTestimonial = testimonialData => dispatch => {
  axios
    .post('/testimonials', testimonialData)
    .then(res =>
      dispatch({
        type: ADD_TESTIMONIAL,
        payload: res.data
      })
    )
    .then(
      dispatch({
        type: CLEAR_ERRORS
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
    .then(
      dispatch({
        type: ERR_TESTIMONIAL,
        payload: null
      })
    );
};

export const getTestimonials = () => dispatch => {
  axios
    .get('/testimonials')
    .then(res =>
      dispatch({
        type: GET_TESTIMONIALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

export const deleteTestimonial = id => dispatch => {
  axios
    .delete(`/testimonials/${id}`)
    .then(res =>
      dispatch({
        type: DEL_TESTIMONIAL,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
