import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';

class History extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    const historyBtn = (
      <Button className="btn admin-btn lead py-3 btn-warning my-2">
        Add History
      </Button>
    );

    return (
      <div className="wrap">
        <div className="general-BG History-wrap parallaxFX">
          <div className="dark-overlay2 flexCenter">
            <Container className="flexCenter flexDown">
              <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
                HISTORY
              </h1>
              <p className="lead p-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                maxime!
              </p>
              {isAuthenticated ? historyBtn : ''}
            </Container>
          </div>
        </div>
        <div className="page-info">
          <h1> </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(History);
