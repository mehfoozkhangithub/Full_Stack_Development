import React from 'react'
import { useDispatch } from 'react-redux';

import { signUpThunk } from '../Reducer/Sign-In/SignUpReducer'

export const SignUp = () => {
    // const signSelector = useSelector((state) => state.sign);

    const dispatchSignUp = useDispatch();


    const fields = [
        {
            name: 'username', type: 'text', placeholder: 'Enter your username', label: 'Username', required: true
        },
        { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
        // { name: 'age', type: 'number', placeholder: 'Enter your age', label: 'Age', required: true },
        { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
        // { name: 'confirmPassword', type: 'password', placeholder: 'Enter your confirm password', label: 'Confirm Password', required: true },
    ];

    const [form, setForm] = React.useState(() => {
        return fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {})
    })
    console.log('🚀 ~ form:', form);
    // useLayoutEffect learn this 

    // console.clear();


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchSignUp(signUpThunk(form)); // This handles API + redux
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ border: "1px solid red", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* 
                <input name="name" type="text" />
                <input name="age" type="number" />
                <input name="email" type="email" />
                <input name="password" type="password" />
                <input type="submit" value="submit" /> 
                */}

                {
                    fields?.map((el, i) => {
                        return (
                            <div key={i}>
                                <label htmlFor={el.name}>{el.label}</label>
                                <input
                                    type={el.type}
                                    name={el.name}
                                    id={el.id}
                                    placeholder={el.placeholder}
                                    value={form[el.name]}
                                    onChange={(e) => handleChange(e)}
                                    required={el.required}
                                />
                            </div>
                        )
                    })
                }
                <button type="submit">Submit</button>
            </form >
        </>
    )
}
