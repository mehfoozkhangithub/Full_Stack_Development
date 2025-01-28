import React from "react";
import { CustomForm } from "./customComponents";

export const Form = () => {

    const fields = [
        { name: 'username', type: 'text', placeholder: 'Enter your username', label: 'Username', required: true },
        { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
        { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
    ]

    const handleFormSubmit = (data) => {
        console.log('Form Submitted:', data);
    };





    return (<>
        <div>
            <h1>React form with Props Validation</h1>
            {/* customForm components*/}
            <CustomForm
                fields={fields}
                onSubmit={handleFormSubmit} buttonText="Register" />
        </div>
    </>)
}