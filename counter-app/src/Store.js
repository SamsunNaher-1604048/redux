import { createStore } from "redux";
import CounterReducer from "./services/Reducer/ReducerCounter";

const store=createStore(CounterReducer)

export default store;