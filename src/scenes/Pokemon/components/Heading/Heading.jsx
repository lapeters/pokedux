import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title, tag: Tag }) => (
  <div className="heading">
    <Tag>{title}</Tag>
  </div>
);
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Heading;
