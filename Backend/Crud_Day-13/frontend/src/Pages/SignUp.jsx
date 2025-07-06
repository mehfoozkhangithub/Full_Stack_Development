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

    /*   const [form, setForm] = useState(() => {
          return
      }) */

    const handleSubmit = () => {

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*   <input name="name" type="text" />
                <input name="age" type="number" />
                <input name="email" type="email" />
                <input name="password" type="password" />
                <input type="submit" value="submit" /> */}
            </form>
        </>
    )
}
