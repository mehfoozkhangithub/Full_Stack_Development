import { createStore } from "redux";
import rooted from "./Redux/Reduces/Main";

const store=createStore(
    rooted
)

export default store;