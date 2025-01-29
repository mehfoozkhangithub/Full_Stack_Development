import React from "react";
import PropTypes from "prop-types";

// customComponents

/**
 * 
 * @param {something} param0 
 * @returns 
 * 
 */

/**
 * accumulator = {
 * username:""
 * email:""
 * pasword:""
 * } 
 */

export const CustomForm = ({ fields, onSubmit, buttonText }) => {

    const [formData, setFormData] = React.useState(() => {
        // Initialize form data with empty value
        return fields.reduce((accumulator, field) => {
            accumulator[field.name] = "";
            return accumulator;
        }, {});
    });
    // console.log(fields, "this is field array");

    // handle input change.

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    // handle form sumbission

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        onSubmit(formData)//pass frorm data to the parent
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                fields?.map((el) => (
                    <div key={el.name}>
                        <label htmlFor={el.name}>
                            {el.label}
                        </label>
                        <input type={el.type}
                            name={el.name}
                            id={el.id}
                            placeholder={el.placeholder}
                            value={formData[el.name]}
                            onChange={(e) => handleChange(e)}
                            required={el.required}
                        />
                    </div>
                ))
            }
            <button type="submit">{buttonText}</button>
        </form>
    );
};





// PropTypes Validation

CustomForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}