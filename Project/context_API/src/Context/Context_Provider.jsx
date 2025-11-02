import { createContext, useState } from "react";

export const CreateContexts = createContext(null);

export const Context_Provider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CreateContexts.Provider value={{ count, setCount }}>{children}</CreateContexts.Provider>
    )
}
