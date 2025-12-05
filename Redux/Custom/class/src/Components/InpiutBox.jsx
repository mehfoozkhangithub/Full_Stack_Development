import React from 'react';
import PropTypes from 'prop-types';
export const InpiutBox = ({ label, length }) => {
  return <div>{label}</div>;
};

InpiutBox.propType = {
  length: PropTypes.number,
  label: PropTypes.string,
};

InpiutBox.defaultProps = {
  label: 'mehfooz khan',
};
