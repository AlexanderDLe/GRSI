import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default () => {
  const year = new Date();

  return (
    <footer>
      <Container>
        <div className="text-center">{/* <h1 className="p-3"> </h1> */}</div>
        <Row className="text-left">
          <Col sm="6" lg="3" className=" p-5">
            <Link to="/" className="text-white">
              <div className="p-1">Home</div>
            </Link>
            <Link to="/mission" className="text-white">
              <div className="p-1">Mission</div>
            </Link>
            <Link to="/goals" className="text-white">
              <div className="p-1">Goals</div>
            </Link>
            <Link to="/vision" className="text-white">
              <div className="p-1">Vision</div>
            </Link>
            <Link to="/history" className="text-white">
              <div className="p-1">History</div>
            </Link>
            <Link to="/testimonials" className="text-white">
              <div className="p-1">Testimonials</div>
            </Link>
          </Col>
          <Col sm="6" lg="3" className=" p-5">
            <Link to="/services" className="text-white">
              <div className="p-1">Services</div>
            </Link>
            <Link to="/crack-seal" className="text-white">
              <div className="p-1">Crack Seal</div>
            </Link>
            <Link to="/joint-seal" className="text-white">
              <div className="p-1">Joint Seal</div>
            </Link>
            <Link to="/traffic-loops" className="text-white">
              <div className="p-1">Traffic Loops</div>
            </Link>
            <Link to="/traffic-lights" className="text-white">
              <div className="p-1">Traffic Lights</div>
            </Link>
            <Link to="/login" className="text-white">
              <div className="p-1">Admin</div>
            </Link>
          </Col>
          <Col sm="6" lg="3" className=" p-5">
            <Link to="/contact" className="text-white">
              <div className="p-1">Contact Us</div>
            </Link>
            <br />
            <div className="p-1">Address:</div>
            <div className="p-1">18204 Dorothy Rd.</div>
            <div className="p-1">Garden Grove, CA 92843</div>
          </Col>
          <Col sm="6" lg="3" className=" p-5">
            <div className="p-1 text-center">
              <i className="pb-3 fas fa-phone m-auto" />
              <br />(714)123-4567
              <br />
            </div>
            <br />
            <div className="p-1 text-center">
              <i className="pb-3 fas fa-clock" />
              <br />
              Mon-Fri
              <br />
              7AM-5PM(PST)
            </div>
          </Col>
        </Row>
        <div className="py-3 text-center">
          &copy; Global Road Sealing Inc. {year.getFullYear()}
        </div>
      </Container>
    </footer>
  );
};
