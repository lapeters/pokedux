import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BarGraph.scss';

const BarGraph = ({ data, cap }) => (
  <div className="bar-graph">
    <Graph dataA={data} capA={parseInt(cap, 10)} />
  </div>
);

BarGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
  cap: PropTypes.string.isRequired,
};

const Graph = ({ dataA, capA }) => {
  function renderBars() {
    return dataA.map((item) => {
      const percent = (item.amount / capA) * 100;
      return (
        <Bar
          percent={percent}
          key={item.name}
        />
      );
    });
  }

  return (
    <div className="graph__wrap">
      <div className="graph">
        <BarTextContent dataB={dataA} />
        <div className="graph__bars">
          { renderBars() }
        </div>
      </div>
    </div>
  );
};

Graph.propTypes = {
  dataA: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
  capA: PropTypes.number.isRequired,
};

const Bar = ({ percent }) => (
  <div className="bar__wrap">
    <div className="bar">
      <div className="bar__amount" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

Bar.propTypes = {
  percent: PropTypes.number.isRequired,
};

const BarTextContent = ({ dataB }) => (
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

BarTextContent.propTypes = {
  dataB: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
  })).isRequired,
};

export default BarGraph;
