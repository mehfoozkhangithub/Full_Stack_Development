import React from 'react';

export const PinItems = React.forwardRef(({ max, onChange }, ref) => {
  const handleKey = (e) => {
    console.log(`🚀 ~ e:`, e);
    switch (e.keyCode) {
      //   case 8:// for back-space
      //     return onChange(e.target.value);
      default:
        onChange(e.target.value);
    }
  };

  return (
    <input
      style={{
        width: '50px',
        height: '50px',
        border: '2px solid gray',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
      }}
      type="text"
      maxLength={max}
      onKeyUp={handleKey}
      ref={ref}
    />
  );
});
