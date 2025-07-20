export const Increments = { type: 'INCREMENT' };
export const Decrements = { type: 'DECREMENT' };
export const Reset = { type: 'RESET' };

// here we are dynamically pass the value in reducer function while getting the value form user.

export const incrementByValue = (value) => {
    return {
        type: 'IncrementByValue',
        payload: value,
    };
};
export const decrementByValue = (value) => {
    return {
        type: 'decrementByValue',
        payload: value,
    };
};