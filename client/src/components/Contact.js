import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import classnames from 'classnames';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      errors: '',
      success: ''
    };
  }

  render() {
    const errors = '';
    const success = '';
    const Spinner = '';

    return (
      <div className="wrap">
        <div className="general-BG Contact-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
                CONTACT
              </h1>
              <div className="container">
                <Form
                  noValidate
                  onSubmit={this.handleSubmit}
                  className="justify-content-center"
                >
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
                      <div className="invalid-feedback lead">{errors.name}</div>
                    )}
                  </FormGroup>

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
                      rows="5"
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

                  <Button className="contactButton text-center m-auto">
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
