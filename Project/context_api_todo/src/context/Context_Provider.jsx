
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyContexts = createContext(null);

export const ContexProviders = ({ children }) => {
    const [todo, setTodo] = useState([]);

    return <>
        <MyContexts.Provider value={{ todo, setTodo }}>
            {children}
        </MyContexts.Provider>
    </>

}