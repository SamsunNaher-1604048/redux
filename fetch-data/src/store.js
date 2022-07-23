import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { TodosReducer } from "./services/reducer/TodosReducer";

const store=createStore(TodosReducer,applyMiddleware(thunk))
export default store;