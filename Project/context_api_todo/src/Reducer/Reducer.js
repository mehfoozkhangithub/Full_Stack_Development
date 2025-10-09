// logic 

import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./Action";

export const Reducer = (state, action) => {
    console.log('🚀 ~ action:', action);
    console.log('🚀 ~ state:', state);
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case EDIT_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            return [...state, action.payload];


        default:
            return state;
    }
}