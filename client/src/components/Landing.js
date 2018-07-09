import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <div className="landing-services">
        <Container className="py-5">
          <div data-aos="fade-up" aos-duration="500">
            <h1 className="py-5 GRSI-Title text-center font-weight-bold">
              GLOBAL ROAD SEALING INC.
            </h1>
          </div>
          <p className="lead text-center p-5">
            Global Road Sealing Inc. specializes in road maintainence and
            construction. Founded in 1989, GRSI has been trusted by numerous
            organizations across the state to provide high quality solutions in
            managing road conditions.
          </p>
          <hr />
          <h1 className="py-5 GRSI-Title text-center">SERVICES</h1>
          <Row className="pt-5">
            <Col md="4" className="p-1">
              <Link to="/crack-seal">
                <div className="service-card m-auto">
                  <i className="service-icon py-5 m-auto fas fa-signature" />
                  <h3 className="text-center pb-5 ">Crack Seal</h3>
                </div>
              </Link>
            </Col>
            <Col md="4" className="p-1">
              <Link to="/joint-seal">
                <div className="service-card m-auto">
                  <i className="service-icon py-5 m-auto fas fa-plus " />
                  <h3 className="text-center pb-5 ">Joint Seal</h3>
                </div>
              </Link>
            </Col>
            <Col md="4" className="p-1">
              <Link to="/traffic-loops">
                <div className="service-card m-auto">
                  <i className="service-icon py-5 m-auto far fa-circle " />
                  <h3 className="text-center pb-5 ">Traffic Loops</h3>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
