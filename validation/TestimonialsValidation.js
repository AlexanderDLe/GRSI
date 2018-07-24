const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTestimonialsInput(data) {
  let errors = {};

  data.quote = !isEmpty(data.quote) ? data.quote : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.company = !isEmpty(data.company) ? data.company : '';

  if (!Validator.isLength(data.quote, { min: 10, max: 300 })) {
    errors.quote = 'Quote must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.quote)) {
    errors.quote = 'Quote field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.company, { min: 2, max: 50 })) {
    errors.company = 'Company must be between 2 and 50 characters';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
