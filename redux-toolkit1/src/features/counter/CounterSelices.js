import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}

export const counterSelice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count=state.count-1;
        },
        reset:(state)=>{
            state.count=0

        }
    }
})
export const {increment,decrement,reset}=counterSelice.actions
export default counterSelice.reducer