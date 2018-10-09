import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import JointSealIMG from '../../img/Joint Seal.jpg';
import JointSealCutter from '../../img/Joint Seal Cutter.jpg';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG JointSeal-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              JOINT SEAL
            </h1>
            <p className="lead p-2 text-white text-center">
              To stabilize and maintain concrete sections.
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
                Joint treatments consist of placing specialized materials into
                prepared joints to prevent water and incompressible intrusion
                into the joints and underlying pavement layers, and to reinforce
                the adjacent pavement.
              </p>
              <p className="">
                Restriction of water entry into underlying pavement base and
                sub-grade layers serves to maintain pavement strength and
                prolong pavement life. The various joint types experience
                different movement ranges depending mostly on joint spacing and
                temperature variations. Different types of joint treatment
                materials and installation geometries are required for the
                different conditions.
              </p>
            </Col>
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={JointSealIMG} alt="" />
            </Col>
          </Row>

          <br className="" />
          <hr className="my-5" />
          <Row className="py-5">
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={JointSealCutter} alt="" />
            </Col>
            <Col lg="6" className="flexCenter flexDown p-3">
              <h1 className="py-3 service-title">Applications</h1>
              <hr className="title-divider" />
              <p className="">
                Joint treatment materials can be installed in a range of
                configurations and with varying preparation methods.
                Configurations range from filling unprepared joints and capping
                with a narrow overband, to specifically designed reservoirs that
                widen the joint to provide the correct geometry for the expected
                movements.
              </p>
              <p className="">
                Application consists of 3 basic steps– cleaning the joints,
                cutting the reservoir if needed, and installing the material.
                Cleaning is generally accomplished using compressed air.
                Reservoir cutting is performed using a joint saw or router that
                can cut varying widths and depths as required. Hot applied
                products heated to the appropriate temperature in a melter unit
                equipped with agitation and a temperature monitoring device. The
                heated material is then pumped into the joint or placed using
                pour pots or wheeled applicators. Cold applied materials can be
                installed using pour pots, or other containers. For all
                installations, joints must be clean and dry for the best
                performance.
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
