import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { logoutUser } from '../../actions/authActions';
import { connect } from 'react-redux';

class Admin extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="wrap">
        <div className="general-BG History-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
                ADMINISTRATION
              </h1>
              <p className="lead p-2 text-white">
                What actions would you like to take?
              </p>
              <Button className="admin-btn lead py-3 px-5 btn-success my-2">
                Add History
              </Button>
              <Button className="admin-btn lead py-3 px-4 btn-primary my-2">
                Add Testimonial
              </Button>
              <Button
                onClick={this.handleLogout.bind(this)}
                className="admin-btn lead py-3 px-5 btn-danger my-2"
              >
                Log Out
              </Button>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(Admin);
