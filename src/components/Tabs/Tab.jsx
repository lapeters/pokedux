import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { onClick } = this;
    const { activeTab, label } = this.props;
    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }
    if (label) {
      return (
        <li className={className}>
          <button
            type="button"
            onClick={onClick}
            onKeyDown={onClick}
          >
            {label}
          </button>
        </li>
      );
    }
    return (
      <li>Loading...</li>
    );
  }
}
Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
