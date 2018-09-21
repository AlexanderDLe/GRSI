import React from 'react';
import { Col } from 'reactstrap';

export default props => {
  return (
    <Col className="history-clientBox" sm="6" md="4" lg="3">
      <div className="history-clientContent TLC-Shadow">
        <img className="history-logo" src={props.image} alt={props.altText} />
      </div>
    </Col>
  );
};
