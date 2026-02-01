import React from 'react';
import PropTypes from 'prop-types';

const style = {
  width: '50px',
  height: '50px',
  border: '2px solid gray',
  margin: '10px',
  padding: '10px',
  textAlign: 'center',
};

export const PinItems = React.forwardRef(({ max, onChange }, ref) => {
  console.log('🚀 ~ onChange:', onChange);
  const handleKeyDown = (e) => {
    console.log('🚀 ~ e:', e);

    console.log('🚀 ~ e.keyCode:', e.keyCode);
    switch (e.keyCode) {
      // case 8:
      //   return onChange();

      case 9:
        // for tab behav default
        e.preventDefault();
        break;

      default:
        onChange(e.target.value);
    }
  };
  return (
    <>
      <input
        ref={ref}
        type="text"
        style={style}
        maxLength={max}
        onKeyUp={handleKeyDown}
      />
    </>
  );
});

PinItems.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
