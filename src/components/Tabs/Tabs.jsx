import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    const { children } = this.props;
    this.state = {
      activeTab: children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { children } = this.props;
    if (children.length !== 1) {
      const { activeTab } = this.state;
      const { onClickTabItem } = this;

      return (
        <div className="tabs">
          <ol className="tab-list">
            {children.map((child) => (
              <Tab
                activeTab={activeTab}
                key={child.props.label}
                label={child.props.label}
                onClick={onClickTabItem}
              />
            ))}
          </ol>
          <div className="tab-content">
            {children.map((child) => {
              if (child.props.label !== activeTab) {
                return undefined;
              }
              return child.props.children;
            })}
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};
export default Tabs;
