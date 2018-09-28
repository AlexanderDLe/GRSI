# Global Road Sealing Inc. Site github repository.

![grsi site](https://user-images.githubusercontent.com/37781362/46183388-8c97d600-c285-11e8-8018-89a3b90f986b.png)

Current Build: http://globalroadsealinginc.ga/

## Build Tools

## Front End

- HTML/CSS/JavaScript
- Bootstrap 4: Preferred CSS framework of choice.
- React + Redux
- Reactstrap for bootstrap integration within React.
- Axios for making requests to API.
- Classnames for setting conditional CSS classes within React.
- JwT-Decode for decoding the JwT bearer token to validate authentication.
- redux-thunk

## Back End

- Node: The server is built via node.
- Express: Node framework that allows for ease of building applications quickly and reliably.
- jsonwebtoken/passport: Authentication method that utilizes bearer tokens to recognize authentication.
- bcrypt: Encryption library that returns a hash/salted version of user password for secure use.
- MongoDB/mongoose: The database utilized is NoSQL MongoDB. Mongoose allows smooth development via Schemas, models, etc.
- nodemailer: Server sends email via nodemailer.
- Concurrently for running both the server and client simultaneously.

## Database

# Features:

- Fully responsive interface
- Fast due to being a React SPA
- Login System: The site features a login page that allows the Admin to log in and update the testimonials page.
- Testimonial modifications require field validation and allow admin to create new posts, remove old posts, and fetch.
- Validation is used extensively in three areas of website: Login, adding testimonials, and contact form. Each have required fields that must contain content, etc.
- Contact Form:
