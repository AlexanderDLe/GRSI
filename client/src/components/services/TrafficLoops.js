import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import TrafficLoops from '../../img/Traffic Loops.jpg';
import TrafficLoopsApp from '../../img/Traffic Loops App.png';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG TrafficLoops-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              TRAFFIC LOOPS
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
                A traffic loop detector is a sensor found at intersection,
                parking lots, driveways or car gate systems, in which a circular
                cut is made with a saw in the roads surface, wire is wrpped
                around the loop cut, back to its source and sealed. As a car
                approaches a traffic signal or car park boom gate. It senses the
                cars magnetic field and tells the intersection controller there
                are cars waiting to go.
              </p>
              <p className="">
                An induction or inductive loop is an electromagnetic
                communication or detection system which uses a moving magnet or
                an alternating current to induce an electric current in a nearby
                wire. Induction loops are used for transmission and reception of
                communication signals, or for detection of metal objects in
                metal detectors or vehicle presence indicators.
              </p>
            </Col>
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={TrafficLoops} alt="" />
            </Col>
          </Row>

          <br className="" />
          <hr className="my-5" />
          <Row className="py-5">
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={TrafficLoopsApp} alt="" />
            </Col>
            <Col lg="6" className="flexCenter flexDown p-3">
              <h1 className="py-3 service-title">Applications</h1>
              <hr className="title-divider" />
              <p className="">
                An inductive loop is a metal detector installed in the surface
                of the roadway. Permanent Inductive Loops are considered the
                most reliable traffic detection method available. An inductive
                loop consists of wire "coiled" to form a loop that usually is a
                square, circle or rectangle that is installed into or under the
                surface of the roadway.
              </p>
              <p className="">
                Inductive loops are used in signal detection and work like a
                metal detector. Once a vehicle drives over a loop sensor the
                loop field changes which allows the detection device to detect
                the presence of an object (mainly a vehicle).
              </p>
              <p className="">
                Often Inductive loops are referred to as presence detectors, and
                in traffic detection are often used in combination with axle
                sensors to collect classification data.
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
