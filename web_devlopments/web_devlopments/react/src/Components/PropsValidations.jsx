import React from 'react';

import PropTypes from 'prop-types';

export const PropsValidations = ({ length, label }) => {
  return (
    <>
      <h2>{label}</h2>
      <h4>{length}</h4>
    </>
  );
};

PropsValidations.propTypes = {
  length: PropTypes.oneOf([1, 3]).isRequired,
};
