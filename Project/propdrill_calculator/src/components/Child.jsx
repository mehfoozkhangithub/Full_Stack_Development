import { useEffect, useState } from 'react'

export const Child = ({ props }) => {

    const [ans, setAns] = useState(0);
    let key = props.operators;

    useEffect(() => {
        switch (key) {
            case "+":
                setAns(+props.number1 + +props.number2)
                break;

            default:
                break;
        }
    }, [props.number1, props.number2, key]);


    return (
        <>
            <h1>Child Ans : {ans}</h1>
        </>
    )
}
