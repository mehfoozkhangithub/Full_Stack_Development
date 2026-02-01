/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { PinItems } from './PinItems';

export const InputBox = ({ label, length, perBox }) => {
  const [data, setData] = useState(new Array(length).fill(''));

  const element = useRef(new Array(length).fill(0));

  const handleAddFunc = (values, index) => {
    console.log('🚀 ~ index:', index);
    console.log('🚀 ~ values:', values);
    const val = [...data];
    val[index] = values;
    setData(val);
    if (index < length - 1) {
      element.current[index + 1]?.focus();
    }
  };
  console.log('🚀 ~ data:', data);

  return (
    <>
      {data &&
        data.map((el, index) => {
          return (
            <PinItems
              ref={(n) => (element.current[index] = n)}
              max={perBox}
              key={index}
              onChange={(values) => handleAddFunc(values, index)}
            />
          );
        })}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};
