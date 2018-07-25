import {
  GET_TESTIMONIALS,
  ADD_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  LOADING_TESTIMONIALS
} from '../actions/types';

const initialState = {
  testimonials: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_TESTIMONIALS:
      return {
        ...state,
        loading: true
      };
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: action.payload,
        loading: false
      };
    case ADD_TESTIMONIAL:
      return state;
    case DELETE_TESTIMONIAL:
      return state;
    default:
      return state;
  }
}
