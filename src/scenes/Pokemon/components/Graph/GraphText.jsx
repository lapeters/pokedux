import React from 'react';
import PropTypes from 'prop-types';

const GraphText = ({ dataB }) => (
  <div className="graph__text">
    {
      dataB.map((item) => (
        <div className="text" key={item.name}>
          <h3>{`${item.name}:`}</h3>
          <p><strong>{item.amount}</strong></p>
        </div>
      ))
    }
  </div>
);

GraphText.propTypes = {
  dataB: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
};

export default GraphText;
