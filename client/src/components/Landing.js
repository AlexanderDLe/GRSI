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
          <h1 className="py-5 GRSI-Title text-center font-weight-bold">
            GLOBAL ROAD SEALING INC.
          </h1>
          <p className="lead text-center p-2">
            Global Road Sealing Inc. specializes in road maintainence and
            construction. Founded in 1989, GRSI has been trusted by numerous
            organizations across the state of California to provide high quality
            solutions in managing road conditions. We deploy highly-trained
            teams and use state-of-the-art equipment to ensure excellent
            results.
          </p>
          <div className="text-center pt-3 pb-5">
            <Link to="/contact" className="mb-5 request-button">
              REQUEST QUOTE
            </Link>
          </div>
          <hr />
          <h1 className="py-5 GRSI-Title text-center">Services</h1>
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
      <div className="landing-philosophy py-5">
        <Container>
          <hr />
          <div
            id="myCarousel"
            className="Landing carousel slide center py-5"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to="1" />
              <li data-target="#myCarousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item carousel-image-1 active">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                </div>
              </div>

              <div className="carousel-item carousel-image-2">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                </div>
              </div>

              <div className="carousel-item carousel-image-3">
                <div className="container">
                  <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                </div>
              </div>
            </div>

            <a
              href="#myCarousel"
              data-slide="prev"
              className="carousel-control-prev carousel-control"
            >
              <span className="carousel-control-prev-icon carousel-control" />
            </a>
            <a
              href="#myCarousel"
              data-slide="next"
              className="carousel-control-next carousel-control"
            >
              <span className="carousel-control-next-icon carousel-control" />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};
