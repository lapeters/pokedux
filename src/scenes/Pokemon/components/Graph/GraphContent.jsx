import React from 'react';
import PropTypes from 'prop-types';
import GraphText from './GraphText';
import GraphBar from './GraphBar';

const GraphContent = ({ dataA, capA }) => {
  function renderBars() {
    return dataA.map((item) => {
      const percent = (item.amount / capA) * 100;
      return (
        <GraphBar
          percent={percent}
          key={item.name}
        />
      );
    });
  }

  return (
    <div className="graph__wrap">
      <div className="graph">
        <GraphText dataB={dataA} />
        <div className="graph__bars">
          { renderBars() }
        </div>
      </div>
    </div>
  );
};

GraphContent.propTypes = {
  dataA: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
  capA: PropTypes.number.isRequired,
};

export default GraphContent;
