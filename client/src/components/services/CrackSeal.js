import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CrackSealCU from '../../img/CrackSeal-Study.png';
import CrackSealN from '../../img/CrackSeal-Neighborhood.jpg';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG CrackSeal-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              CRACK SEALING
            </h1>
            <p className="lead p-2 text-white text-center centered-text">
              Crack treatments repairs and treats road damages.
            </p>
          </Container>
        </div>
      </div>
      <Container className="container-shadow">
        <div className="page-info page-padding conditional-padding px-3">
          <Row className="flexColReverse">
            <Col lg="6" className="p-3 flexCenter flexDown conditional-padding">
              <h1 className="service-title">Objectives</h1>
              <hr className="title-divider" />
              <p className="">
                Restriction of water entry into underlying pavement base and
                sub-grade layers serves to maintain pavement strength and
                prolong pavement life. Pavements in different climate zones,
                with different construction types, and with different traffic
                loadings experience different types of cracking. The various
                crack types experience different movement ranges depending
                mostly on crack spacing and temperature variations. Different
                types of crack treatment materials and installation geometries
                are required for the different conditions.
              </p>
              <p className="">
                Crack treatments consist of placing specialized materials into
                prepared cracks to prevent water and incompressible intrusion
                into the cracks and underlying pavement layers, and to reinforce
                the adjacent pavement.
              </p>
            </Col>
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={CrackSealCU} alt="" />
            </Col>
          </Row>

          <br className="" />
          <hr className="my-5" />
          <Row className="py-5">
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={CrackSealN} alt="" />
            </Col>
            <Col lg="6" className="flexCenter flexDown p-3">
              <h1 className="py-3 service-title">Applications</h1>
              <hr className="title-divider" />
              <p className="">
                Crack treatment materials can be installed in a range of
                configurations and with varying preparation methods.
                Configurations range from filling unprepared cracks and capping
                with a narrow overband, to specifically designed reservoirs that
                widen the crack to provide the correct geometry for the expected
                movements.
              </p>
              <p className="">
                Application consists of 3 basic steps– cleaning the cracks,
                cutting the reservoir if needed, and installing the material.
                Cleaning is generally accomplished using compressed air.
                Reservoir cutting is performed using a crack saw or router that
                can cut varying widths and depths as required. Hot applied
                products heated to the appropriate temperature in a melter unit
                equipped with agitation and a temperature monitoring device. The
                heated material is then pumped into the crack or placed using
                pour pots or wheeled applicators. Cold applied materials can be
                installed using pour pots, or other containers. For all
                installations, cracks must be clean and dry for the best
                performance.
              </p>
            </Col>
          </Row>
          <div className="text-center mt-5 pt-5 pb-5 request-button-container">
            <Link to="/contact" className="my-5 request-button">
              REQUEST QUOTE
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
