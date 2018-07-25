import {
  GET_TESTIMONIALS,
  ADD_TESTIMONIAL,
  ERR_TESTIMONIAL,
  DEL_TESTIMONIAL,
  LOADING_TESTIMONIALS
} from '../actions/types';

const initialState = {
  testimonials: [],
  success: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_TESTIMONIALS:
      return {
        ...state
      };
    case GET_TESTIMONIALS:
      return {
        ...state,
        testimonials: action.payload
      };
    case ADD_TESTIMONIAL:
      return {
        ...state,
        testimonials: [action.payload, ...state.testimonials],
        success: true
      };
    case ERR_TESTIMONIAL:
      return {
        ...state,
        success: false
      };
    case DEL_TESTIMONIAL:
      return {
        ...state,
        testimonials: state.testimonials.filter(
          testimonial => testimonial._id !== action.payload
        )
      };
    default:
      return state;
  }
}
