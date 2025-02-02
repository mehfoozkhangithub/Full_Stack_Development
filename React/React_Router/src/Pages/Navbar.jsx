import { Link } from "react-router-dom"

export const Navbar = () => {
    return (<>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    </>)
}