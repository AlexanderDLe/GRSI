import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="landingWrap">
      <div className="landingBG">
        <div className="landing-box">
          <Container>
            <Row>
              <Col className="text-center p-4 landing-item">
                <i className="landing-icon fas fa-phone" />
                <br />
                Call us Toll-Free: <br /> (714)123-4567
              </Col>
              <Col className="text-center p-4 landing-item">
                <i className="landing-icon fas fa-clock" />
                <br />
                Operating Hours: <br />
                Mon-Fri 7AM-5PM(PST)
              </Col>
              <Col className="text-center p-4 landing-item">
                <i className="landing-icon fas fa-envelope" /> <br />
                Contact <br />
                via our Contact Form.
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="py-5">
        <h1 className="GRSI-Title text-center font-weight-bold">
          GLOBAL ROAD SEALING INC.
        </h1>
        <p className="lead text-center p-3">
          Global Road Sealing Inc. specializes in road maintainence and
          construction. Founded in 1989, GRSI has been trusted by numerous
          organizations across the state to provide high quality solutions in
          managing road conditions.
        </p>
        <Row>
          <Col md="4">
            <i className="service-icon py-5 m-auto fas fa-signature" />
            <h3 className="text-center">Crack Seal</h3>
          </Col>
          <Col md="4">
            <i className="service-icon py-5 m-auto fas fa-plus " />
            <h3 className="text-center">Joint Seal</h3>
          </Col>
          <Col md="4">
            <i className="service-icon py-5 m-auto far fa-circle " />
            <h3 className="text-center">Traffic Loops</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
