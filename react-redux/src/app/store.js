import { configureStore } from "@reduxjs/toolkit"
import bookSlice  from "../feature/bookSclice"

 const store=configureStore({
    reducer:{
       bookReducer:bookSlice
    }

 })
export default store;