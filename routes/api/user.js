const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/key');
const passport = require('passport');

// Load User Model
const User = require('../../models/User');

// @route   GET   /user
// @desc    Users Page
// @acess   Public
router.get('/', (req, res) => res.json({ msg: 'User works' }));

// @route   POST   /user/register
// @desc    Register User
// @acess   Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST   /user/login
// @desc    Login User / Return Token
// @acess   Public
router.post('/login', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  // Find user by name
  User.findOne({ name }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ name: 'User not found' });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched / Create payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign Token
        jwt.sign(payload, key.pw, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        });
      } else {
        return res.status(400).json({ password: 'Password incorrect' });
      }
    });
  });
});

// @route   POST   /user/current
// @desc    Return current user
// @acess   Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name
    });
  }
);

module.exports = router;
