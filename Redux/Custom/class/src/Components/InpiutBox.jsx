/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PinItems } from './PinItems';

export const InpiutBox = ({ label, length, perBox, onChange }) => {
  const [values, setValues] = useState(new Array(length).fill(''));

  const element = useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {
    console.log(value, index);
    const val = [...values];
    val[index] = value;
    setValues(val);
    if (value.length > 0 && value.length <= perBox && index < length - 1) {
      element.current[index + 1]?.focus();
    }

    onChange(val.join(''));
  };

  const handleChangeOnBack = (value, index) => {
    if (index > 0) {
      element.current[index - 1].focus();
    }
    const val = [...values];
    val[index] = value;
    setValues(val);
    onChange(val.join(''));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    console.log('paste', e.clipboardData.getData('Text'));
  };

  React.useEffect(() => {
    console.log('this is from element', element);
  }, []);

  return (
    <div onPaste={handlePaste}>
      <h1>{label}</h1>
      {values.map((item, index) => (
        <PinItems
          ref={(n) => (element.current[index] = n)}
          key={index}
          max={perBox}
          onChange={(v) => handleChange(v, index)}
          onBackSpace={(v) => handleChangeOnBack(v, index)}
        />
      ))}
    </div>
  );
};

InpiutBox.propType = {
  length: PropTypes.number,
  label: PropTypes.string,
};

InpiutBox.defaultProps = {
  label: 'mehfooz khan',
  perBox: 1,
};
