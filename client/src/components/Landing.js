import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="landingWrap">
      <div className="landingBG">
        <div className="landing-box">
          <Container>
            <Row>
              <Col className="text-center p-5 landing-item">
                <i className="landing-icon fas fa-phone" />
                <br />
                Call us Toll-Free: <br /> (714)123-4567
              </Col>
              <Col className="text-center p-5 landing-item">
                <i className="landing-icon fas fa-clock" />
                <br />
                Operating Hours: <br />
                Mon-Fri 7AM-5PM(PST)
              </Col>
              <Col className="text-center p-5 landing-item">
                <i className="landing-icon fas fa-envelope" /> <br />
                Contact <br />
                via our Contact Form.
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
