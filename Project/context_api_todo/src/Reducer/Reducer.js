// logic 

import { ADD_TODO, DELETE_TODO, EDIT_TODO, CONFIRM_TODO, CANCEL_TODO } from "./Action";

export const Reducer = (state, action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case EDIT_TODO:
            return state.map((el) => el.id === action.payload.id ? { ...el, isEdit: true } : el);

        case DELETE_TODO:
            return state.filter((el) => el.id !== action.payload.id);

        case CONFIRM_TODO:
            return state.map((el) => el.id === action.payload.id ? { ...el, isEdit: false, todoText: action.payload.updateText } : el);

        case CANCEL_TODO:
            return state.map((el) => el.id === action.payload.id ? { ...el, isEdit: false } : el);

        default:
            return state;
    }
}