const reducer = (oldState, actions) => {
    console.log(oldState, actions);
    switch (actions.type) {

        case 'ADD':
            return { ...oldState, count: oldState.count + 1 };
        case 'REDUCE':
            return {
                ...oldState
                , count: oldState.count - 1
            };


        default:
            return oldState;
    }
}

export { reducer }