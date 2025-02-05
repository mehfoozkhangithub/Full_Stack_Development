import { Link, useLocation } from "react-router-dom";

export const BreadCrumbs = () => {
    const location = useLocation();
    console.log(location, "this is location hook");


    // help/contant  --> help | contact  // this is called breadCrumbs

    let currentLink = ''
    // this we call chaining the data.
    // to get the path in array.
    // this is for we not getting the empty string.
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
        currentLink += `/${crumb}`
        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb} </Link>
            </div>
        )
    })
    console.log(crumbs, "this is crumbs");
    return <>
        <div className="crumbs">
            {crumbs}
        </div>
    </>
}