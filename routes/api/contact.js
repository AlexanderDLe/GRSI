const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const key = require('../../config/key');

// Validate Contact Form
const validateContactInput = require('../../validation/ContactValidation');

// @route   POST  /contact
// @desc    Contact form submission
// @acess   Public
router.post('/', (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Job Title: ${req.body.job}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'grsidatabase@gmail.com',
        pass: key.pw
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: 'grsidatabase@gmail.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.render('Error');
      } else {
        res.json({ success: 'Your message has been sent!' });
      }
    });
  });
});

module.exports = router;
