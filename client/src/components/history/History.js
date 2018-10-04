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
              Since 1989, Global Road Sealing Inc. has been a dependable
              contractor for and around the state of California. As a trusted
              and reliable company, they deliver and exceed expectations.
            </p>
          </Container>
        </div>
      </div>
      <Container className="container-shadow">
        <div className="page-padding px-5">
          <LogoGallery />
        </div>
      </Container>
    </div>
  );
};
