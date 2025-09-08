import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../util/CommonHelper";
import { userConfig as uc } from "../../util/ConfigHelper";

const initialState = {
    ...getLocal(uc),
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserState: (state, action) => {
            const updates = action.payload;
            return {
                ...state,
                ...updates,
            };
        },
        setLogout: (state, action) => {
            return uc;
        },
    },
});

export const { setUserState, setLogout } = userSlice.actions;
export default userSlice.reducer;
