# Global Road Sealing Inc. Site Github Repository.

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
- nodemailer: Server sends email via nodemailer.
- Concurrently for running both the server and client simultaneously.

## Database

- MongoDB/mongoose: The database utilized is NoSQL MongoDB. Mongoose allows smooth development via Schemas, models, etc.

# Features:

## Login System

![grsi login page](https://user-images.githubusercontent.com/37781362/46186321-cae7c200-c292-11e8-98ec-d83047802456.PNG)

The site features a login page that allows the Admin to log in and update the testimonials page. There is a validation system that checks for the appropriate fields and returns an error if there field is incorrect when submitted.

![grsi login code](https://user-images.githubusercontent.com/37781362/46186539-0d5dce80-c294-11e8-8c08-d247da963281.PNG)

Above is the API code for login. I use mongoose to search the MongoDB database for the user, compare the incoming password with bcrypt, then, if everything succeeds, respond to the request with a JwT Bearer Token. Once the client receives the token from the API, a redux action will save it to the local storage, decode, and set the current user.

## Testimonial Modifications

![grsi admin page](https://user-images.githubusercontent.com/37781362/46187069-a7267b00-c296-11e8-8816-ca7e25ce82fd.PNG)

Once logged in, the admin will have access to the Admin page where he/she will have the option to either edit the testimonials page or log out.

![grsi edit testimonial](https://user-images.githubusercontent.com/37781362/46187282-beb23380-c297-11e8-8195-524af7c1a9fd.png)

Above, you'll see the ability to perform actions to affect the testimonials page. A red circle containing an "X" will also now appear next to each testimonial, allowing the admin to delete a post. Also, the "Add Testimonial" form has validation and error checking.

Require field validation and allow admin to create new posts, remove old posts, and fetch.

- Validation is used extensively in three areas of website: Login, adding testimonials, and contact form. Each have required fields that must contain content, etc.
- Contact Form:
