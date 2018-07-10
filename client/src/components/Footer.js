import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center p-5">
            <h1> Footer</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
