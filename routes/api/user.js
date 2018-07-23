const express = require('express');
const router = express.Router();

// @route   GET   /user
// @desc    Users Page
// @acess   Public
router.get('/', (req, res) => console.log('Users Works'));

module.exports = router;
