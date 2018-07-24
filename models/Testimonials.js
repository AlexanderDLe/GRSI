const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TestimonialsSchema = new Schema({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Testimonials = mongoose.model(
  'testimonials',
  TestimonialsSchema
);
