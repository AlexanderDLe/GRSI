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

- Node: The server is built via Node.
- Express: Node framework that allows for ease of building applications quickly and reliably.
- jsonwebtoken/passport: Authentication method that utilizes bearer tokens to recognize authentication.
- bcrypt: Encryption library that returns a hash/salted version of user password for secure use.
- nodemailer: Server sends email via nodemailer.
- Concurrently for running both the server and client simultaneously.

## Database

- MongoDB: The database utilized is MongoDB, a NoSQL database.

# Features:

## Login System

![grsi login page](https://user-images.githubusercontent.com/37781362/46186321-cae7c200-c292-11e8-98ec-d83047802456.PNG)

The site features a login page that allows the Admin to log in and update the testimonials page. There is a validation system that checks for the appropriate fields and returns an error if a field is incorrect when submitted.

Back-end API code:

![grsi login code](https://user-images.githubusercontent.com/37781362/46186539-0d5dce80-c294-11e8-8c08-d247da963281.PNG)

Above is the API code for login. I use mongoose to search the MongoDB database for the user, verify the incoming password with bcrypt, then respond to the request with a JwT Bearer Token. Once the client receives the token from the API, a redux action will save it to the local storage, decode, and set the current user.

## Testimonial Modifications - Add Testimonial

![grsi admin page](https://user-images.githubusercontent.com/37781362/46187069-a7267b00-c296-11e8-8816-ca7e25ce82fd.PNG)

Once logged in, the admin will have access to the Admin page where he/she will have the option to either edit the testimonials page or log out.

![grsi add testimonial](https://user-images.githubusercontent.com/37781362/46189384-389bea00-c2a3-11e8-9dd6-9e5b508c0a57.PNG)

Above, there is an "Add Testimonial" form with form validation and error checking.

React Code for "Add Testimonials" Form:

![grsi add testimonial react code](https://user-images.githubusercontent.com/37781362/46189402-51a49b00-c2a3-11e8-8997-142b5a41ab11.png)

On the right is a reusable "Form Input" component I created for the form. It receives a number of props that will enable it to render different fields.

(An amazing feature I love about React is its ability to pass props from one component to another. This composition style leads to very clean and maintainable code and is such a joy to develop.)

On the left is my implementation of the "Form Input" components. Although I'm reusing the same component, I'm able to render completely different fields due to the ability to pass props.

## Testimonial Modifications - Delete Testimonial

![grsi pre and post testimonials](https://user-images.githubusercontent.com/37781362/46190069-d3e28e80-c2a6-11e8-98b3-ad08c3997f65.png)

If the admin logs in, a red circle containing an "X" will appear next to each existing testimonial, allowing the admin to delete a post.

React Code for "Delete Testimonials" Button:

![grsi delete testimonials react code](https://user-images.githubusercontent.com/37781362/46190742-9e8b7000-c2a9-11e8-97c0-34ed70d19aed.PNG)

If the admin logs in and is authenticated, Redux's application state will update then pass the state to the "Testimonial Item" components as props. The react components will then be able to detect that the user is authenticated, thus triggering the delete button to appear via a conditional (ternary) operator.

Require field validation and allow admin to create new posts, remove old posts, and fetch.

## Contact Form

![grsi contact form](https://user-images.githubusercontent.com/37781362/46192223-2c1d8e80-c2af-11e8-9873-22f2d1ba8e93.PNG)

A contact form is available with validation and error checking.

- Validation is used extensively in three areas of website: Login, adding testimonials, and contact form. Each have required fields that must contain content, etc.
