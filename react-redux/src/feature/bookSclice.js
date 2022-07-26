const { createSlice } = require("@reduxjs/toolkit")
const { v4: uuidv4 } = require("uuid");

const initBooks={
    books:[
        {id:uuidv4(),title:"rooftop os threan",author:"pata nahi"},
        {id:uuidv4(),title:"normal people",author:"jani na"}
    ],
}

 export const bookSlice = createSlice({
    name:"books",
    initialState:initBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
          state.books.push(action.payload)
        },
        updatebook:(state,action)=>{
            const{id,title,author}=action.payload
            const existBook=state.books.filter((book)=>book.id===id)
            if(existBook){
                existBook[0].title=title
                existBook[0].author=author
            }
        },
        deleteBook:(state,action)=>{
            const id=action.payload
            state.books=state.books.filter((book)=>book.id!==id)
        }
    }
})

export const {showBooks,addBook,deleteBook,updatebook}=bookSlice.actions;
export default bookSlice.reducer;