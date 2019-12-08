import React from 'react';
import PropTypes from 'prop-types';

const GraphBar = ({ percent }) => (
  <div className="bar__wrap">
    <div className="bar">
      <div className="bar__amount" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

GraphBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default GraphBar;
