import { useState } from 'react'
import { Login_api } from '../Api/Login.js'

import { useNavigate } from 'react-router-dom';

const baseURL = import.meta.env.VITE_BASE_URL;

export const Login = () => {
    const navigate = useNavigate()

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
        console.log('🚀 ~ final:', final.status);
        if (final.status !== 202) {
            navigate('/signup');
            return
        };
        localStorage.setItem("token", final.data.token)
        navigate("/blog-read")
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
