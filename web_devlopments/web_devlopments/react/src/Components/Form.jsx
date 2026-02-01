import PropTypes from 'prop-types';
import { useState } from 'react';

/**  
 @param {formData}


 {
 userName:'',
 userPassword:'',
 userPhone:'',
 userEmail:'',
 }

*/

export const Form = ({ formData, btnValue, funcValue }) => {
  const [formValue, setFormValue] = useState(() => {
    return formData.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
    }, {});
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    funcValue(formValue);
  };

  return (
    <>
      <h1>form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {formData?.map((el, i) => {
          return (
            <div key={i}>
              <label name={el.name} htmlFor={el.id}>
                {el.label}
              </label>
              <br />
              <br />
              <input
                id={el.id}
                name={el.name}
                type={el.name}
                placeholder={el.placeholder}
                required={el.isRequire}
                autoComplete="off"
                onChange={(event) => handleChange(event)}
              />
              <br />
              <br />
            </div>
          );
        })}
        <button>{btnValue}</button>
      </form>
    </>
  );
};

Form.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isRequire: PropTypes.bool.isRequired,
      placeholder: PropTypes.string.isRequired,
    }).isRequired
  ),
  btnValue: PropTypes.string.isRequired,
  funcValue: PropTypes.func.isRequired,
};
