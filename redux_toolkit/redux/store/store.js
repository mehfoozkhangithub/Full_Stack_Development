import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../slice/tableSlice";
import userReducer from "../slice/userSlice";
import { setLocal } from "../../util/CommonHelper";

export const store = configureStore({
    reducer: {
        table: tableReducer,
        user: userReducer,
    },
});

store.subscribe(() => {
    const { table, user } = store.getState();

    // set the table state to local storage
    Object.entries(table).forEach(([key, value]) => {
        setLocal(key, value);
    });

    // set the user state to local storage
    setLocal("user", user);
});

