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
            <p className=" p-2 text-white text-center centered-text">
              Crack treatments repairs and treats road damages.
            </p>
          </Container>
        </div>
      </div>
      <Container className="container-shadow">
        <div className="page-info page-padding conditional-padding px-3">
          <Row className="flexColReverse">
            <Col lg="6" className="p-3 flexCenter flexDown conditional-padding">
              <h1 className="py-3 service-title">Objectives</h1>

              <p className="">
                Ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ducimus officiis, voluptatibus in quia architecto ea officia
                aliquid dolore recusandae.
              </p>
              <p className="">
                Dolor sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
              <p className="">
                Lorem sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
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

              <p className="">
                Ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ducimus officiis, voluptatibus in quia architecto ea officia
                aliquid dolore recusandae.
              </p>
              <p className="">
                Dolor sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
              <p className="">
                Lorem sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
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
