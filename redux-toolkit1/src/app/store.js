import { configureStore } from "@reduxjs/toolkit"
import counterSelice from "../features/counter/CounterSelices"

const store = configureStore({
    reducer:{
        counter:counterSelice
    }
})

export default store;