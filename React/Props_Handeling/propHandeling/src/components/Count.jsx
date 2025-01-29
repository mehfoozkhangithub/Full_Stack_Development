import { useState } from "react";

const CountExample = () => {
    const [state, setState] = useState(0);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState(state + 1)}>ADD</button>
            <button onClick={() => setState(state - 1)}>REDUCE</button>
        </div>
    );
}

export default CountExample;