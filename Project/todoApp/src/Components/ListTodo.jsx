import React from 'react'

export const ListTodo = ({ props }) => {
    console.log('🚀 ~ props:', props);

    return (
        <>
            <h1>ListTodo</h1>
            {
                props.map((el, i) => (
                    <div key={i}>
                        <p>{el.text}</p>
                        <button>edit</button>
                        <button>del</button>
                    </div>
                ))
            }
        </>
    )
}


