const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const key = require('./config/key');

// Routing API's
const testimonials = require('./routes/api/testimonials');
const contact = require('./routes/api/contact');

// Database Configuration
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Validation for Contact Form
const validateContactInput = require('./validation/ContactValidation');

app.post('/contact', (req, res) => {
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

// Use Routes
app.use('/testimonials', testimonials);
app.use('/contact', contact);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Serve static assets if in production!

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
