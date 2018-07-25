import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const testimonialsBtn = (
      <Button className="btn admin-btn lead py-3 btn-success my-2">
        Add Testimonial
      </Button>
    );

    const renderTestimonial = (
      <Row className="p-5 testimonial-item m-auto">
        <Col>
          <blockquote className="blockquote">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            aspernatur.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            placeat quod odit ipsa? Quae corrupti accusantium dolorem ratione ab
            facere delectus atque unde, eum earum architecto perspiciatis labore
            modi mollitia cupiditate vel, sunt nisi. Dolorem.
          </blockquote>
          <div className="blockquote-footer">
            John Doe From <cite title="Company 1">Company 1</cite>
          </div>
        </Col>
      </Row>
    );

    return (
      <div className="wrap">
        <div className="general-BG Testimonials-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
                TESTIMONIALS
              </h1>
              <p className="lead p-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                maxime!
              </p>
              {this.props.auth.isAuthenticated ? testimonialsBtn : ''}
            </Container>
          </div>
        </div>
        <div className="page-info">
          <Container className="p-5">{renderTestimonial}</Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Testimonials);
