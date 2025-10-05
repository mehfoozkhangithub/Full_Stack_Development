import { useState } from 'react'
import { Login_api } from '../Api/Login.js'

const baseURL = import.meta.env.VITE_BASE_URL;

export const Login = () => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);



    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (email === "" && pass === "") return;

        fetchData();
    }


    const fetchData = async () => {
        let final = await Login_api(baseURL, { email: email.trim(), pass: pass.trim() })
        console.log('🚀 ~ final:', final);
        localStorage.setItem("token", final.token);
    }



    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={() => handleSubmitLogin(event)}>
                <label htmlFor="email">email</label>
                <input name='email' id='email' type="email" placeholder='enter the email...' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="pass">password</label>
                <input name='pass' id='pass' type="password" placeholder='enter the pass' onChange={(e) => setPass(e.target.value)} />
                <button type='submit'> submit </button>
            </form>
        </>
    )
}
