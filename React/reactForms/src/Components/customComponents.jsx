import React from 'react';
import PropTypes from 'prop-types';

// customComponents

/**
 *
 * @param {something} param0
 * @returns
 * hello
 */

/**
 * formData = {
 * username:""
 * email:""
 * pasword:""
 * }
 */

export const CustomForm = ({ fields, onSubmit, buttonText }) => {
  const [formData, setFormData] = React.useState(() => {
    // Initialize form data with empty value
    return fields.reduce((accumulator, field) => {
      accumulator[field.name] = '';
      return accumulator;
    }, {});
  });

  console.log('-> formData:', formData);
  console.log('🚀 ~ fields:', fields);

  // console.log(fields, "this is field array");
  // handle input change..

  const handleChange = (e) => {
    console.log('🚀 ~ e:', e);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form sumbission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    onSubmit(formData); //pass frorm data to the parent
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      {fields && fields.map((el, i) => (
        <div key={i}>
          <label htmlFor={el.name}>{el.label}</label><br /><br />
          <input
            type={el.type}
            id={el.name}
            name={el.name}
            placeholder={el.placeholder}
            value={formData[el.name]}
            required={el.required}
            onChange={(e) => handleChange(e)}
          /> <br /> <br />
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

// PropTypes Validation

/* 
[
{
name:string,
type:string,
placeholder: string,
label: string,
required: bool,
}
]
*/
CustomForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
