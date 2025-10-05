import React, { useState } from 'react'
import { SignUP } from "../Api/Signup"

const baseURL = import.meta.env.VITE_BASE_URL;

export const Signup = () => {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [names, setNames] = useState(null);



    const handleSubmitSignup = (e) => {
        e.preventDefault();

        if (email === "" && pass === "" && names === "") return;

        fetchData();
    }


    const fetchData = async () => {
        let final = await SignUP(baseURL, { email: email.trim(), pass: pass.trim(), name: names.trim() })
        console.log('🚀 ~ final:', final);
    }
    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={() => handleSubmitSignup(event)}>
                <label htmlFor="email">email</label>
                <input name='email' id='email' type="email" placeholder='enter the email...' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="pass">password</label>
                <input name='pass' id='pass' type="password" placeholder='enter the pass' onChange={(e) => setPass(e.target.value)} />
                <label htmlFor="names">name</label>
                <input name='names' id='names' type="text" placeholder='enter the names' onChange={(e) => setNames(e.target.value)} />
                <button type='submit'> submit </button>
            </form>
        </>
    )
}
