import { nanoid } from "nanoid";

// eslint-disable-next-line react-refresh/only-export-components
export const Initial_Value = { todos: [] };

export const Reducer = (state, action) => {
  console.log(action, "this is state");
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: nanoid(), text: action.payload, isEdit: false, isToggle: false },
      ];

    case "DELETE_TODO":
      return state.filter((el) => el.id !== action.payload);

    case "EDITS_TODO":
      return state.map((element) =>
        element.id === action.payload
          ? { ...element, isEdit: !element.isEdit }
          : element
      );

    case "UPDATES_TODO":
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, text: action.payload.text, isEdit: !el.isEdit };
        }
        return el;
      });

    default:
      return state;
  }
};
