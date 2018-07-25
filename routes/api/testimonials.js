const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Testimonials Model
const Testimonials = require('../../models/Testimonials');

// Testimonials Validation
const validateTestimonialsInput = require('../../validation/TestimonialsValidation');

// @route   GET   /testimonials
// @desc    Testimonials Page
// @acess   Public
router.get('/', (req, res) => {
  Testimonials.find()
    .sort({ date: -1 })
    .then(testimonials => res.json(testimonials))
    .catch(err => res.status(404).json({ noPostFound: 'No posts found' }));
});

// @route   POST /testimonials
// @desc    Testimonials Page
// @acess   Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTestimonialsInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTestimonial = new Testimonials({
      quote: req.body.quote,
      name: req.body.name,
      company: req.body.company
    });

    newTestimonial.save().then(testimonial => res.json(testimonial));
  }
);

// @route   DELETE  /testimonials
// @desc    Testimonials Page
// @acess   Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Testimonials.findById(req.params.id)
      .then(testimonial => {
        testimonial.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ noPostFound: 'No post found' }));
  }
);
module.exports = router;
