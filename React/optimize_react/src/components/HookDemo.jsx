import React, { useCallback, useState } from 'react'
import { MemoDemoCompo } from './DemoCompo';

export const HookDemo = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increaseCount = useCallback(() => {
        setCount2((prev) => prev + 1)
    }, [count2])
    return (
        <>
            <h1>count {count1}</h1>
            <button onClick={() => setCount1((prev) => prev + 1)}>count1</button>
            <MemoDemoCompo counts2={count2} functionInc={increaseCount} />
        </>
    )
}
