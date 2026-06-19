import { useRef, useState } from 'react';
import { PinItems } from './PinItems';

export const InputBox = ({ length, perBox }) => {
  const [data, setData] = useState(new Array(length).fill(''));

  const element = useRef(new Array(length).fill(0));

  const handleAdd = (value, index) => {
    const val = [...data];
    val[index] = value;
    setData(val);
    if (index < length - 1) {
      element.current[index + 1].focus();
    }
  };
  console.log(`🚀 ~ data:`, data);

  return (
    <>
      {data &&
        data.map((el, i) => (
          <PinItems
            max={perBox}
            key={i}
            onChange={(v) => handleAdd(v, i)}
            ref={(n) => (element.current[i] = n)}
          />
        ))}
    </>
  );
};
