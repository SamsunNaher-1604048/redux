const initstate={
    isLoading:false,
    todos:[],
    error:null
}

 export const TodosReducer=(state=initstate,action)=>{
    switch (action.type) {
        case "GETTODO":
            return{
                ...state,
                isLoading:true
            }
        case "GETTODOSUCCESS":
            return{
                isLoading:false,
                todos:action.payload,
                error:null
            }
            
        case "GETTODOFAIL":
            return{
                isLoading:false,
                todos:[],
                error:action.payload,
            }
    
        default:
           return state
    }

}