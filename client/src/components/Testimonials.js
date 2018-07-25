import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      company: '',
      quote: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { errors } = this.props;

    const testimonialsBtn = (
      <Button
        className="btn admin-btn lead py-3 btn-success my-2"
        data-toggle="modal"
        data-target="#testimonialModal"
      >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
              {isAuthenticated ? testimonialsBtn : ''}
            </Container>
          </div>
        </div>
        <div className="page-info">
          <Container className="p-5">{renderTestimonial}</Container>
        </div>

        {/* MODAL */}
        <div className="modal" id="testimonialModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title lead">Add Testimonial</div>
                <Button className="close lead" data-dismiss="modal">
                  &times;
                </Button>
              </div>

              <div className="modal-body">
                <Form onClick={this.handleSubmit}>
                  <FormGroup className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <Input
                      type="text"
                      name="name"
                      className={classnames('form-control', {
                        'is-invalid': errors.name
                      })}
                      placeholder="Full Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback lead">{errors.name}</div>
                    )}
                  </FormGroup>

                  <FormGroup className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-briefcase" />
                      </span>
                    </div>
                    <Input
                      type="text"
                      name="company"
                      className={classnames('form-control', {
                        'is-invalid': errors.company
                      })}
                      placeholder="Company Name"
                      value={this.state.company}
                      onChange={this.handleChange}
                    />
                    {errors.company && (
                      <div className="invalid-feedback lead">
                        {errors.company}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-pencil-alt" />
                      </span>
                    </div>
                    <Input
                      type="textarea"
                      name="quote"
                      className={classnames('form-control', {
                        'is-invalid': errors.quote
                      })}
                      placeholder="Quote"
                      value={this.state.quote}
                      onChange={this.handleChange}
                      rows="4"
                    />
                    {errors.quote && (
                      <div className="invalid-feedback lead">
                        {errors.quote}
                      </div>
                    )}
                  </FormGroup>
                  <Button className="btn modal-btn text-center m-auto lead btn-success">
                    SUBMIT
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Testimonials);
