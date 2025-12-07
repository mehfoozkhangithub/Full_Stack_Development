import React from 'react';

const style = {
  padding: 10,
  width: 15,
  fontSize: 14,
  margin: 5,
};

const PinItems = React.forwardRef(({ onChange, max, onBackSpace }, ref) => {
  //   console.log('🚀 ~ max:', max);
  const handleKeyUp = (e) => {
    console.log('🚀 ~ e:', e);

    switch (e.keyCode) {
      case 8:
        // this for backspace
        if (!e.target.value) onBackSpace(e.target.value);
        break;

      case 9:
        // this is for tab
        e.oreventDefault();
        break;

      default:
        onChange(e.target.value);
    }
  };

  return (
    <input ref={ref} onKeyUp={handleKeyUp} style={style} maxLength={max} />
  );
});

export { PinItems };
