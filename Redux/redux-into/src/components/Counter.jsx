import React from 'react';

import { store } from '../Redux/Store';

export const Counter = () => {
    const [update, setUpdate] = React.useState(0);

    // useReducer(reducer,initialState); 

    let { dispatch, subscribe } = store;


    subscribe(() => {
        //tell react to re-render the components, because 
        // this function will only trigger if the state inside reduc store will change.

        // 1. If the state of the components has change.
        // 2. If the prop's of the components has change.

        setUpdate((prev) => prev + 1)

    })

    let { count } = store.getState();
    return (
        <>
            <h1>Counter:{count}</h1>
            <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
            <button onClick={() => dispatch({ type: 'REDUCE' })}>-</button>
        </>
    )
}
