const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

// Routing API's
const testimonials = require('./routes/api/testimonials');
const contact = require('./routes/api/contact');
const user = require('./routes/api/user');

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

// Apply body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport Middleware
app.use(passport.initialize());

// Passport Configuration
require('./config/passport')(passport);

// Use Routes API
app.use('/testimonials', testimonials);
app.use('/contact', contact);
app.use('/user', user);

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
