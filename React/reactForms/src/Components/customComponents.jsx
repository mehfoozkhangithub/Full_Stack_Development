import React from "react";
import PropTypes from "prop-types";

// customComponents


export const CustomForm = ({ fields, onSumbit, buttonText }) => {
    const [formData, setFormData] = React.useState(() => {
        // Initialize form data with empty value
        return fields.reducer((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {});
    });

    // handle input change

    const handleChange = (e) => {
        const { name, value } = e.traget;
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    // handle form sumbission

    const handleSubmit = (e) => {
        e.preventDefault();
        onSumbit(formData)//pass frorm data to the parent
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                fields.map((el) => (
                    <div key={el.name}>
                        <label htmlFor={el.name}>
                            {el.label}
                        </label>
                        <input type={el.type}
                            name={el.name}
                            id={el.id}
                            placeholder={el.placeholder}
                            value={formData[el.name]}
                            onChange={handleChange}
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

CustomForm.prototype = {
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