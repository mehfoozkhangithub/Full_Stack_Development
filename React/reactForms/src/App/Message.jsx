// import React from 'react'
import PropTypes from 'prop-types';

export const Message = ({ msg, children, firstName, lastName }) => {
    console.log('🚀 ~ lastName:', lastName);
    console.log('🚀 ~ firstName:', firstName);
    return (
        <>
            <h1>Hello</h1>
            {children}
            <p>{msg}</p>
            <p>FirstName: {firstName}</p>
            <p>LastName: {lastName}</p>
        </>
    )
}


Message.propTypes = {
    msg: PropTypes.string,
    children: PropTypes.array,
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }).isRequired
};

// Message.defaultProps = {
//     msg: "Nada",
//     children: [],
//     user: {
//         firstName: "Maksim",
//         lastName: "Ivanov"
//     }
// };