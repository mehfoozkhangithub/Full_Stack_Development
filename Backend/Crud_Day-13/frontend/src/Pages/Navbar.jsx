import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className="container">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>SignUp</Link>
                <Link to='/product'>Product</Link>
                <Link to='/cart'>cart</Link>
            </div>
        </>
    )
}
