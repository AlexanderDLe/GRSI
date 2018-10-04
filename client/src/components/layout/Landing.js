import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import trafficLight from '../../img/TrafficLight.png';
import CrackSealIcon from '../../img/CrackSealIcon.png';

export default () => {
  return (
    <div className="landingWrap wrap">
      <div className="landingBG parallaxFX">
        <div className="dark-overlay flexCenter flexDown">
          <h1 className="py-5 GRSI-Title text-center font-weight-bold text-white">
            GLOBAL ROAD SEALING INC.
          </h1>
        </div>
      </div>
      <Container className="container-shadow">
        <div className="landing-services page-padding">
          <div className="">
            <h1 className="pb-3 Page-Title text-center font-weight-bold">
              SERVICES
            </h1>
            <p className="lead p-3 centered-text">
              We design, build and install product on projects of all sizes,
              both public and private. Our state-of-the-art equipment and
              practices deliver the{' '}
              <strong className="font-weight-bold">
                safest and highest quality results.
              </strong>
            </p>
            <div className="landing-box mx-auto page-margin">
              <div>
                <Row className="">
                  <Col className="text-center landing-item">
                    <i className="landing-icon fas fa-phone" />
                    <br />
                    Call us Toll-Free: <br /> (714)123-4567
                  </Col>
                  <Col className="text-center landing-item">
                    <i className="landing-icon fas fa-clock" />
                    <br />
                    Operating Hours: <br />
                    Mon-Fri 7AM-5PM(PST)
                  </Col>
                  <Col className="text-center landing-item">
                    <Link to="/contact">
                      <i className="landing-icon fas fa-envelope" />
                    </Link>
                    <br />
                    Contact <br />
                    via our Contact Form.
                  </Col>
                </Row>
              </div>
            </div>
            <Row className="conditional-padding mt-5">
              <Col lg="3" md="6" className="p-1">
                <Link to="/crack-seal">
                  <div className="service-card m-auto">
                    <img
                      className="service-icon-traffic py-5 m-auto"
                      src={CrackSealIcon}
                      alt=""
                    />
                    <h4 className="text-center pb-5 ">Crack Seal</h4>
                  </div>
                </Link>
              </Col>
              <Col lg="3" md="6" className="p-1">
                <Link to="/joint-seal">
                  <div className="service-card m-auto">
                    <i className="service-icon py-5 m-auto fas fa-plus " />
                    <h4 className="text-center pb-5 ">Joint Seal</h4>
                  </div>
                </Link>
              </Col>
              <Col lg="3" md="6" className="p-1">
                <Link to="/traffic-loops">
                  <div className="service-card m-auto">
                    <i className="service-icon py-5 m-auto far fa-circle " />
                    <h4 className="text-center pb-5 ">Traffic Loops</h4>
                  </div>
                </Link>
              </Col>
              <Col lg="3" md="6" className="p-1">
                <Link to="/traffic-loops">
                  <div className="service-card m-auto">
                    <img
                      className="service-icon-traffic py-5 m-auto"
                      src={trafficLight}
                      alt=""
                    />
                    <h4 className="text-center pb-5 traffic-text">
                      Traffic/Street Lighting
                    </h4>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
        <div id="parallaxFX2-parent" className="landing-philosophy py-1">
          <div className="landing-philosophy-box parallaxFX2  page-padding">
            <div className="py-5 landing-philosophy-text">
              <h1 className="pb-3 GRSI-Title text-center font-weight-bold">
                PHILOSOPHY
              </h1>

              <p className="lead p-2 centered-text">
                Here at Global Road Sealing Inc, we hold many core values and
                beliefs. We trust in family, our employees, our work ethic, and
                standards. We strongly believe in teamwork, positivity, firm
                moral foundations, and a passion for doing what is right.
              </p>
              <p className="lead  centered-text p-2">
                We hold ourselves responsible for delivering high quality
                results no matter the job. With a positive and professional
                approach, we'll go the extra mile to provide outstanding
                customer satisfaction with full regard to safety and regulatory
                protocol.
              </p>
            </div>
          </div>
          <div className="landing-testimonials text-center">
            <div className="page-padding">
              <h1 className="GRSI-Title font-weight-bold ">TESTIMONIALS</h1>
              <Row className="py-3 conditional-padding">
                <Col lg="6">
                  <blockquote className="blockquote">
                    The best company I've worked with, hands down.
                    <br />
                    <br />
                    Global Road Sealing has been outstanding in their service
                    for my county. They have been consistently delivering high
                    quality work day in and day out. They have been a pleasure
                    to work with and I would absolutely recommend them!
                  </blockquote>
                  <div className="blockquote-footer">
                    John Doe From <cite title="Company 1">Company 1</cite>
                  </div>
                </Col>
                <Col lg="6">
                  <blockquote className="blockquote">
                    I appreciate the workmanship, safety record and timeliness
                    of the work your crews continue to provide.
                    <br />
                    <br />
                    The roads are much safer due to the diligence of the crews
                    from Global Road Sealing. They've been working hard and we
                    fully commend the quality of their work. Thank you!
                  </blockquote>
                  <div className="blockquote-footer">
                    Homer Simpson From <cite title="Company 1">Company 2</cite>
                  </div>
                </Col>
              </Row>
              <br />
              <br />
              <Link
                to="/testimonials"
                className="mb-5 request-button borderStyle"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
