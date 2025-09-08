/* 
| Step | What to Do                                        |
| ---- | ------------------------------------------------- |
| 1    | Install Redux Toolkit and React-Redux             |
| 2    | Create `store.js` with `configureStore`           |
| 3    | Create a `slice` using `createSlice()`            |
| 4    | Wrap `<App />` with `<Provider>`                  |
| 5    | Use `useSelector` and `useDispatch` in components |
*/


import { configureStore } from '@reduxjs/toolkit'
import signupFun from '../Reducer/Sign-In/SignUpReducer'

export const store = configureStore({
    reducer: {
        sign: signupFun
    }
})

