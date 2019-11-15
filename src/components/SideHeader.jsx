import React from 'react';
import PropTypes from 'prop-types';

function SideHeader({ setClass }) {
  return (
    <div className={`col--6 sideheader-${setClass}`}>
      <h2>Side Header</h2>
    </div>
  );
}
SideHeader.propTypes = { setClass: PropTypes.string };
SideHeader.defaultProps = { setClass: 'default' };
export default SideHeader;
