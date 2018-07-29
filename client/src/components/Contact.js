import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'reactstrap';
import Spinner from './utility/Spinner';
import FormInput from './utility/FormInput';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      phone: '',
      job: '',
      errors: {},
      success: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message, phone, job } = this.state;

    const emailData = {
      name,
      email,
      message,
      phone,
      job
    };

    axios
      .post('/contact', emailData)
      .then(this.setState({ loading: true, success: '' }))
      .then(res => {
        if (res) {
          this.setState({
            name: '',
            email: '',
            message: '',
            phone: '',
            job: '',
            errors: {},
            success: 'Your message has been sent!',
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          success: '',
          loading: false
        });
      });
  }

  render() {
    const { errors, success } = this.state;

    return (
      <div className="wrap">
        <div className="contact-BG Contact-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white contact-title font-weight-bold">
                CONTACT
              </h1>
              <div className="container">
                <Form
                  noValidate
                  onSubmit={this.handleSubmit}
                  className="justify-content-center"
                >
                  <Row>
                    <Col md="6">
                      <FormInput
                        error={errors.name}
                        name={'name'}
                        inputIcon={'fas fa-user'}
                        type={'text'}
                        placeholder={'Full Name'}
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col md="6">
                      <FormInput
                        error={errors.email}
                        name={'email'}
                        inputIcon={'fas fa-envelope'}
                        type={'text'}
                        placeholder={'Full Email'}
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <FormInput
                    error={errors.phone}
                    name={'phone'}
                    inputIcon={'fas fa-phone'}
                    type={'text'}
                    placeholder={'Full Phone'}
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <FormInput
                    error={errors.job}
                    name={'job'}
                    inputIcon={'fas fa-briefcase'}
                    type={'text'}
                    placeholder={'Job Title'}
                    value={this.state.job}
                    onChange={this.handleChange}
                  />
                  <FormInput
                    error={errors.message}
                    name={'message'}
                    inputIcon={'fas fa-briefcase'}
                    type={'textarea'}
                    placeholder={'Message'}
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows={'4'}
                  />

                  {success && (
                    <div className="lead pb-3 text-success ">{success}</div>
                  )}

                  {this.state.loading ? <Spinner /> : ''}

                  <Button className="contactButton text-center m-auto lead py-2">
                    SUBMIT
                  </Button>
                </Form>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
