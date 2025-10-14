/* eslint-disable no-unused-vars */
import { useLocation, Link } from 'react-router-dom'

export const Bread_Crumb = () => {
    const location = useLocation();

    let crumb = "";

    const bread_Crumb = location.pathname.split("/").filter((el) => el != "").map(curr => {
        crumb += `${curr}`
        return (
            <div key={crumb}>
                <Link to={crumb}>{curr}</Link>
            </div>

        )

    });

    console.log('🚀 ~ bread_Crumb:', bread_Crumb);
    console.log('🚀 ~ crumb:', crumb);

    return (
        <div className='crumbs'>
            {
                crumb
            }
        </div>
    )
}
