import { createSlice } from "@reduxjs/toolkit";

const initialValue = { user: null };

const SignUpReducer = createSlice({
    name: "signUp-slicer",
    initialState: initialValue,
    reducers: {
        signIns: (state, actions) => {
            state.user = actions.payload
            // console.log('🚀 ~ initialValue:', initialValue);
        }
    }
})


export const { signIns } = SignUpReducer.actions;
export default SignUpReducer.reducer;


// ✅ Async thunk [alternative -> redux-saga]
export const signUpThunk = (formData) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8500/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        });
        const result = await response.json();
        console.log("✅ API response:", result);
        dispatch(signIns(result)); // if needed
        if (result.success) {
            alert(result.message);
        }
    } catch (err) {
        console.error("API error:", err);
    }
};

/* 
"alkaida@nilesh#911$maksad"
"Rohan@Khatton#khan"    
*/