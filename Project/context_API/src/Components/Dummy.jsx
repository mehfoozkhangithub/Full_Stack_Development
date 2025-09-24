import { useContext } from 'react'
import { CreateContexts } from '../Context/Context_Provider';

export const Dummy = () => {
    const { count } = useContext(CreateContexts);

    return (
        <>
            <h1>Dummy {count}</h1>
        </>
    )
}
