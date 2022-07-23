import axios from "axios"

export const GetallTodos=()=>//here we return function.
    async(dispatch)=>{
        dispatch({type:"GETTODO"});
        try {
            const res=await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch({type:"GETTODOSUCCESS", payload:res.data})
        } catch (error) {
            dispatch({type:"GETTODOFAIL",paylode:error.message})
            
        }

};