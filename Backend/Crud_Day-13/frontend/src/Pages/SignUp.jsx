import React from 'react'

export const SignUp = () => {
    const fields = [
        {
            name: 'username', type: 'text', placeholder: 'Enter your username', label: 'Username', required: true
        },
        { name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true },
        { name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true },
        { name: 'confirmPassword', type: 'password', placeholder: 'Enter your confirm password', label: 'Confirm Password', required: true },
    ];

    const [form, setForm] = React.useState(() => {
        return fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {})
    })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*   <input name="name" type="text" />
                <input name="age" type="number" />
                <input name="email" type="email" />
                <input name="password" type="password" />
                <input type="submit" value="submit" /> */}

                {
                    fields?.map((el) => {
                        <div>
                            <label htmlFor={el.name}></label>
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
                    })
                }

            </form>
        </>
    )
}
