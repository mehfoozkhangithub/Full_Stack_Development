import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const links = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/contact", title: "Contact" },
        { path: "/login", title: "Login" },
        { path: "/users", title: "Users" }
    ];

    const defaltStyle = {
        color: "white"
    };

    const activeStyle = {
        color: "tomato"
    }


    return (<>
        {/* this without navlink conscept we have to optamise the code.  */}
        {/* <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div> */}
        {/* something */}
        <div style={{ border: "1px solid red", padding: "10px ", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "80%", margin: "auto", textDecoration: "none" }}>
            {
                links.map((data) => (
                    <NavLink style={({ isActive }) => {
                        return isActive ? activeStyle : defaltStyle;
                    }} key={data.path} to={data.path} end>
                        {data.title}
                    </NavLink>
                ))
            }
        </div>
    </>)
}