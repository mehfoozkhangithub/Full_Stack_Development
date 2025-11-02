import React from 'react';

export const Child = (props) => {
    console.log('🚀 ~ props:', props);


    const handleInc = () => {
        props.incFunc((prev) => prev + 1)
    }
    const handleDec = () => {
        props.incFunc((prev) => prev - 1)
    }
    return (
        <>
            <h1>child {props.counts}</h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </>
    )
}