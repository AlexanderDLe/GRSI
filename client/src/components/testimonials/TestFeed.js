import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestItem from './TestItem';

class TestFeed extends Component {
  render() {
    const { testimonials } = this.props;

    return testimonials.map(testimonial => (
      <TestItem key={testimonial._id} testimonial={testimonial} />
    ));
  }
}

TestFeed.propTypes = {
  testimonials: PropTypes.array.isRequired
};

export default TestFeed;
