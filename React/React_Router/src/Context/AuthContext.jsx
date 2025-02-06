import React from "react";


export const AuthContext = React.createContext(null);


export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);

    const toggelAuth = () => {
        setIsAuth(!isAuth)
    }
    return <AuthContext.Provider value={{ isAuth, toggelAuth }}>
        {children}
    </AuthContext.Provider>
}