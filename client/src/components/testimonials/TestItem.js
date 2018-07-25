import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { deleteTestimonial } from '../../actions/testimonialsActions';

class TestItem extends Component {
  deleteTestimonialOnClick(id) {
    this.props.deleteTestimonial(id);
  }

  render() {
    const { name, company, quote, _id } = this.props.testimonial;
    const { isAuthenticated } = this.props.auth;

    const deleteBtn = (
      <Button
        onClick={this.deleteTestimonialOnClick.bind(this, _id)}
        className="testimonial-delete btn btn-danger"
      >
        X
      </Button>
    );

    return (
      <Row className=" testimonial-item m-auto ">
        <Col className="my-5">
          <blockquote className="blockquote">{quote}</blockquote>
          <div className="blockquote-footer">
            {name} From <cite title="Company 1">{company}</cite>
          </div>
        </Col>
        {isAuthenticated ? deleteBtn : ''}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteTestimonial }
)(TestItem);
