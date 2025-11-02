import { useContext } from "react"
import { CreateContexts } from "../Context/Context_Provider"

export const Counter = () => {

    const { count, setCount } = useContext(CreateContexts);
    return (
        <>
            <h1>count {count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </>
    )
}