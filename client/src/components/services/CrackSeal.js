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
      <div className="page-info p-5">
        <Container className="my-5">
          <Row classname="py-5">
            <Col lg="6" className="flexCenter flexDown">
              <h1 className="mr-auto py-3">Objectives</h1>

              <p className="lead">
                Ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ducimus officiis, voluptatibus in quia architecto ea officia
                aliquid dolore recusandae.
              </p>
              <p className="lead">
                Dolor sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
              <p className="lead">
                Lorem sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
            </Col>
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={CrackSealCU} alt="" />
            </Col>
          </Row>

          <br className="my-5" />
          <hr className="py-5 my-5" />
          <Row classname="py-5">
            <Col lg="6" className="imgBox flexCenter">
              <img className="imgContent" src={CrackSealN} alt="" />
            </Col>
            <Col lg="6" className="flexCenter flexDown p-3">
              <h1 className="mr-auto py-3">Applications</h1>

              <p className="lead">
                Ipsum dolor sit amet consectetur adipisicing elit. Dolores
                ducimus officiis, voluptatibus in quia architecto ea officia
                aliquid dolore recusandae.
              </p>
              <p className="lead">
                Dolor sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
              <p className="lead">
                Lorem sit amet consectetur adipisicing elit. Dolores ducimus
                officiis, voluptatibus in quia architecto ea officia aliquid
                dolore recusandae.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="text-center pt-5 pb-5">
          <Link to="/contact" className="borderStyle mb-5 request-button">
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
};
