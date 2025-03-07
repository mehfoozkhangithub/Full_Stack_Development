import { nanoid } from "nanoid";

export const Reducer = (state, action) => {
  // console.log(" ");
  console.log(state, "this is reducer page state");
  console.log(action, "this is reducer page action");
  // console.log(" ");

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
          ? (element.isEdit = !element.isEdit)
          : element
      );

    default:
      return state;
  }
};
