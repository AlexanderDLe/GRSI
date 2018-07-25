import React, { Component } from 'react';
import { Container, Form, Button } from 'reactstrap';
import Spinner from '../utility/Spinner';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from '../utility/FormInput';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/admin');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, password } = this.state;

    const userData = {
      name,
      password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="wrap">
        <div className="contact-BG Contact-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white contact-title font-weight-bold">
                LOGIN
              </h1>
              <div className="container">
                <Form
                  noValidate
                  onSubmit={this.handleSubmit}
                  className="justify-content-center"
                >
                  <FormInput
                    error={errors.name}
                    name={'name'}
                    inputIcon={'fas fa-user'}
                    type={'text'}
                    placeholder={'Name'}
                    value={this.state.name}
                    onChange={this.handleChange}
                  />

                  <FormInput
                    error={errors.password}
                    name={'password'}
                    inputIcon={'fas fa-lock'}
                    type={'password'}
                    placeholder={'Password'}
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
