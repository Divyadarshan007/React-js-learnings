import countReducer from "./reducer";
import { createStore } from "redux";

const store = createStore(countReducer)


export default store;   