
export const Child = ({ props }) => {
    // state-less example
    console.log('🚀 ~ age:', props.age);
    console.log('🚀 ~ num:', props.num);
    // console.log('🚀 ~ someElements:', someElements.props.num);
    // console.log('🚀 ~ someElements:', someElements.props.age);



    return (
        <>
            <h1>child componets number is {props.num} and age will be this {props.age} </h1>
        </>
    )
}
