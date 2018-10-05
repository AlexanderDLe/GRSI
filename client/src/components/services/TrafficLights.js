import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import TrafficLights from '../../img/Traffic Lights.jpg';
import TrafficInstall from '../../img/Traffic Lights Install.jpg';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG TrafficLights-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              TRAFFIC LIGHTS
            </h1>
            <p className="lead p-2 text-white">
              To ensure the safety and flow of transportation.
            </p>
          </Container>
        </div>
      </div>
      <Container className="container-shadow">
        <div className="page-info page-padding conditional-padding px-3">
          <Row className="flexColReverse">
            <Col lg="6" className="p-3 flexCenter flexDown conditional-padding">
              <h1 className="py-3 service-title">Objectives</h1>
              <hr className="title-divider" />
              <p className="">
                The normal function of traffic lights requires more than slight
                control and coordination to ensure that traffic and pedestrians
                move as smoothly, and safely as possible. A variety of different
                control systems are used to accomplish this, ranging from simple
                clockwork mechanisms to sophisticated computerized control and
                coordination systems that self-adjust to minimize delay to
                people using the road.
              </p>
            </Col>
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={TrafficLights} alt="" />
            </Col>
          </Row>

          <br className="" />
          <hr className="my-5" />
          <Row className="py-5">
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={TrafficInstall} alt="" />
            </Col>
            <Col lg="6" className="flexCenter flexDown p-3">
              <h1 className="py-3 service-title">Applications</h1>
              <hr className="title-divider" />
              <p className="">
                Installation usually requires a form of temporary traffic
                management and is often restricted to off peak working to
                minimise the impact on the existing highway network, although
                this does vary depending on the location of the installation. A
                number of health and safety procedures must be adhered to during
                the installation of traffic signals as there are a number of
                significant hazards such as working alongside live traffic,
                working at height and working with live electricity.
              </p>
            </Col>
          </Row>
          <div className="text-center mt-5 pt-5 pb-5">
            <Link to="/contact" className="my-5 request-button">
              REQUEST QUOTE
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
