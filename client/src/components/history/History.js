import React from 'react';
import { Container } from 'reactstrap';
import LogoGallery from './LogoGallery';

export default () => {
  return (
    <div className="wrap">
      <div className="general-BG History-wrap parallaxFX">
        <div className="dark-overlay2 flexCenter">
          <Container className="flexCenter flexDown">
            <h1 className="py-3 GRSI-Title text-center text-white font-weight-bold">
              CLIENTS
            </h1>
            <p className="lead p-2 text-white centered-text">
              Traffic Loops Crackfilling Inc. has had the honor of working with
              many public and private agencies in California as a trusted
              electrical contractor. Below is a gallery of clients we've had the
              pleasure of working with.
            </p>
          </Container>
        </div>
      </div>
      <div className="page-padding">
        <Container>
          <LogoGallery />
        </Container>
      </div>
    </div>
  );
};
