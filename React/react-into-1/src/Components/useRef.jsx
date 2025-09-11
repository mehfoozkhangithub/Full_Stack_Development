import React from 'react'

export const UseRef = () => {

    const refData = React.useRef(null);

    const handleClick = () => {
        let value = refData.current.value;
        console.log('🚀 ~ value:', value, `-> user Value`);
    }
    return (
        <>
            <h1>useRef Hook's</h1>
            {/* <input type="text" onChange={(e) => handleChange(e.target.value)} /> */}
            <input className='inputUseRef' style={{ border: "1px solid red" }} type="text" ref={refData} />
            <button style={{ border: "1px solid red", backgroundColor: "red", color: '#fff' }} onClick={handleClick}>click me </button>
        </>
    )
}
