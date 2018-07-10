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
          </Col>
          <Col className=" p-5">
            <div className="lead p-1">Services</div>
            <div className="lead p-1">Crack Seal</div>
            <div className="lead p-1">Joint Seal</div>
            <div className="lead p-1">Traffic Loops</div>
          </Col>
          <Col className=" p-5">
            <div className="lead p-1">Home</div>
            <div className="lead p-1">Mission</div>
            <div className="lead p-1">Goals</div>
            <div className="lead p-1">Vision</div>
          </Col>
          <Col className=" p-5">
            <div className="lead p-1 text-center">
              <i className="landing-icon fas fa-phone m-auto" />
              <br />(714)123-4567
              <br />
            </div>
            <br />
            <div className="lead p-1 text-center">
              <i className="landing-icon fas fa-clock" /> <br />
              Mon-Fri 7AM-5PM(PST)
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
