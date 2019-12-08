import React from 'react';
import PropTypes from 'prop-types';
import GraphContent from './GraphContent';

const Graph = ({ data, cap }) => (
  <div className="bar-graph">
    <GraphContent dataA={data} capA={parseInt(cap, 10)} />
  </div>
);

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
  cap: PropTypes.string.isRequired,
};

export default Graph;
