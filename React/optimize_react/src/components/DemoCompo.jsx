import React, { memo } from 'react'


const DemoCompo = ({ counts2, functionInc }) => {
    console.log('demo component called..');
    return (
        <>
            <h1>Demo Components {counts2}</h1>
            <button onClick={() => functionInc()}>count2</button>
        </>
    )
}

export const MemoDemoCompo = memo(DemoCompo)