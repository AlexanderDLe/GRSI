import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import {
  addTestimonial,
  getTestimonials
} from '../../actions/testimonialsActions';
import TestFeed from './TestFeed';
import FormInput from '../utility/FormInput';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      company: '',
      quote: '',
      success: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTestimonials();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors,
        success: false
      });
    }

    if (newProps.testimonials.success) {
      this.setState({
        name: '',
        company: '',
        quote: '',
        errors: {},
        success: 'Success!'
      });
    }
    if (!newProps.testimonials.success) {
      this.setState({
        success: false
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTestimonial = {
      name: this.state.name,
      company: this.state.company,
      quote: this.state.quote
    };

    this.props.addTestimonial(newTestimonial);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { errors, success } = this.state;
    const { testimonials } = this.props.testimonials;

    const testimonialsBtn = (
      <Button
        className="btn admin-btn lead py-3 btn-success my-2"
        data-toggle="modal"
        data-target="#testimonialModal"
      >
        Add Testimonial
      </Button>
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
          <Container className="p-5">
            <TestFeed testimonials={testimonials} />
          </Container>
        </div>

        {/* MODAL */}
        <div className="modal fade" id="testimonialModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title lead">Add Testimonial</div>
                <Button className="close lead" data-dismiss="modal">
                  &times;
                </Button>
              </div>

              <div className="modal-body">
                <Form onSubmit={this.handleSubmit}>
                  <FormInput
                    error={errors.name}
                    name={'name'}
                    inputIcon={'fas fa-user'}
                    type={'text'}
                    placeholder={'Full Name'}
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <FormInput
                    error={errors.company}
                    name={'company'}
                    inputIcon={'fas fa-briefcase'}
                    type={'text'}
                    placeholder={'Company Name'}
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                  <FormInput
                    error={errors.quote}
                    name={'quote'}
                    inputIcon={'fas fa-briefcase'}
                    type={'textarea'}
                    placeholder={'Quote'}
                    value={this.state.quote}
                    onChange={this.handleChange}
                    rows={'4'}
                  />

                  {success && (
                    <div className="lead pb-3 text-success ">{success}</div>
                  )}
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
  errors: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired,
  addTestimonial: PropTypes.func.isRequired,
  getTestimonials: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  testimonials: state.testimonials
});

export default connect(
  mapStateToProps,
  { addTestimonial, getTestimonials }
)(Testimonials);
