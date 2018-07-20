import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import Spinner from './utility/Spinner';

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
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                        {errors.name && (
                          <div className="invalid-feedback lead">
                            {errors.name}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-envelope" />
                          </span>
                        </div>
                        <Input
                          type="text"
                          name="email"
                          className={classnames('form-control', {
                            'is-invalid': errors.email
                          })}
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback lead">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-phone" />
                      </span>
                    </div>
                    <Input
                      type="text"
                      name="phone"
                      className={classnames('form-control', {
                        'is-invalid': errors.phone
                      })}
                      placeholder="Phone Number"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback lead">
                        {errors.phone}
                      </div>
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
                      name="job"
                      className={classnames('form-control', {
                        'is-invalid': errors.job
                      })}
                      placeholder="Job Title"
                      value={this.state.job}
                      onChange={this.handleChange}
                    />
                    {errors.job && (
                      <div className="invalid-feedback lead">{errors.job}</div>
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
                      name="message"
                      className={classnames('form-control', {
                        'is-invalid': errors.message
                      })}
                      placeholder="Message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      rows="4"
                    />
                    {errors.message && (
                      <div className="invalid-feedback lead">
                        {errors.message}
                      </div>
                    )}
                  </FormGroup>
                  {success && (
                    <div className="lead pb-3 text-success ">{success}</div>
                  )}

                  {this.state.loading ? <Spinner /> : ''}

                  <Button className="contactButton text-center m-auto py-3 lead">
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
