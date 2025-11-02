import { useReducer, useEffect } from "react"
//this is actions
const ACTIONS = {
    API_REQUEST: "api-request",
    FETCH_DATA: "fetch-data",
    ERROR: "error"
}
// this is inisial-state
const initialState = {
    datas: [],
    error: null,
    loading: false
}
// this is reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.API_REQUEST:
            return { ...state, datas: [], loading: true };

        case ACTIONS.FETCH_DATA:
            return {
                ...state,
                datas: action.payload,
                loading: false,
                error: null
            }
        case ACTIONS.ERROR:
            return { ...state, datas: [], error: action.payload }

        default:
            return state;
    }
}
// this is fetch hooks
export const useFetch = (url) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        fetch(url).then((res) => res.json()).then((res) => {
            dispatch({ type: ACTIONS.FETCH_DATA, payload: res })
        }).catch((err) => {
            dispatch({ type: ACTIONS.ERROR, payload: err })
        })
    }, [url])
    return state;
}
