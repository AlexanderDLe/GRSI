const express = require('express');
const router = express.Router();

// @route   GET   /testimonials
// @desc    Testimonials Page
// @acess   Public
router.get('/', (req, res) => console.log('Testimonials Works'));

module.exports = router;
