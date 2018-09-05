import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG Goals-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              ABOUT
            </h1>
            <p className="lead p-2 text-white text-center">
              Global Road Sealing Inc. specializes in road maintainence and
              construction. Founded in 19XX, GRSI has been trusted by numerous
              organizations across the state of California to provide high
              quality solutions in managing road conditions.
            </p>
          </Container>
        </div>
      </div>
      <div className="page-info">
        <Container className="conditional-padding py-5 page-info">
          <h1 className="py-3 GRSI-Title text-center text-black font-weight-bold">
            COMPANY DETAILS
          </h1>{' '}
          <p className="text-black lead">
            Traffic Loops Crackfilling Inc. is a licensed Engineering Contractor
            in the state of California. TLC has the framework, resources, and
            network to deliver high quality projects on time. Relevant company
            details below.
          </p>
          <div className="divider TLC-DarkBG my-5" />
          <div className="conditional-padding about-table m-auto lead">
            <Row className="">
              <Col className="about-item-1 border py-1">Company:</Col>
              <Col className="border py-1">Global Road Sealing Inc.</Col>
            </Row>
            <Row className="bg-about">
              <Col className="about-item-1 border py-1">Address:</Col>
              <Col className="border py-1">
                123 Dorothy Road Garden Grove, CA 92844
              </Col>
            </Row>
            <Row className="">
              <Col className="about-item-1 border py-1">Phone:</Col>
              <Col className="border py-1">(714)893-0845</Col>
            </Row>
            <Row className="bg-about">
              <Col className="about-item-1 border py-1">License:</Col>
              <Col className="border py-1">No. 757584</Col>
            </Row>
            <Row className="">
              <Col className="about-item-1 border py-1">Class:</Col>
              <Col className="border py-1">C-10 & C-32</Col>
            </Row>
            <Row className="bg-about">
              <Col className="about-item-1 border py-1">SBE:</Col>
              <Col className="border py-1">No. 2001305</Col>
            </Row>
            <Row className="">
              <Col className="about-item-1 border py-1">DBE & UDBE:</Col>
              <Col className="border py-1">No. 031176</Col>
            </Row>
            <Row className="bg-about">
              <Col className="about-item-1 border py-1">DIR Registration:</Col>
              <Col className="border py-1">No. 1000007714</Col>
            </Row>

            <Row className="bg-about">
              <Col className="about-item-1 border py-1">Email:</Col>
              <Col className="border py-1">company@globalroadsealing.com</Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
