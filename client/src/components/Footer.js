import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <footer>
      <Container>
        <div className="text-center">{/* <h1 className="p-3"> </h1> */}</div>
        <Row className="text-left">
          <Col className=" p-5">
            <div className="lead p-1">Home</div>
            <div className="lead p-1">Mission</div>
            <div className="lead p-1">Goals</div>
            <div className="lead p-1">Vision</div>
            <div className="lead p-1">History</div>
            <div className="lead p-1">Testimonials</div>
          </Col>
          <Col className=" p-5">
            <div className="lead p-1">Services</div>
            <div className="lead p-1">Crack Seal</div>
            <div className="lead p-1">Joint Seal</div>
            <div className="lead p-1">Traffic Loops</div>
            <div className="lead p-1">Traffic Lights</div>
          </Col>
          <Col className=" p-5">
            <div className="lead p-1">Contact Us</div>
            <br />
            <div className="lead p-1">Address:</div>
            <div className="lead p-1">18204 Dorothy Rd.</div>
            <div className="lead p-1">Garden Grove, CA 92843</div>
          </Col>
          <Col className=" p-5">
            <div className="lead p-1 text-center">
              <i className="pb-3 fas fa-phone m-auto" />
              <br />(714)123-4567
              <br />
            </div>
            <br />
            <div className="lead p-1 text-center">
              <i className="pb-3 fas fa-clock" />
              <br />
              Mon-Fri
              <br />
              7AM-5PM(PST)
            </div>
          </Col>
        </Row>
        <div className="py-3 text-center">
          &copy; Global Road Sealing Inc. 2018
        </div>
      </Container>
    </footer>
  );
};
