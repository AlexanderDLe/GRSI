const express = require('express');
const router = express.Router();

// @route   GET   /contact
// @desc    Contact Page
// @acess   Public
router.get('/', (req, res) => res.json({ msg: 'Contact works' }));

module.exports = router;
