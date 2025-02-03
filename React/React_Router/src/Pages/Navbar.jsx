import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    const links = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/contact", title: "Contact" },
        { path: "/login", title: "Login" }
    ]



    return (<>
        {/* this without navlink conscept we have to optamise the code.  */}
        {/* <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div> */}
        {

            links.map((data) => (
                <div key={data.path} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
                    <NavLink to={data.path} >
                        {data.title}
                    </NavLink>
                </div>


            ))
        }
    </>)
}