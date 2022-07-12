const { default: axios } = require("axios")
const { createStore,applyMiddleware } = require("redux")
const thunk=require("redux-thunk").default
const api="https://jsonplaceholder.typicode.com/todos"

//state
const initalstate={
    todo:[],
    isLodding:false,
    iserror:null
}

//action

const gettodorequest=()=>{
    return{
        type:"Request"
    }
}

const gettodofail=(iserror)=>{
    return{
        type:"Fail",
        payload:iserror
    }

}

const gettodosuccess=(todo)=>{
    return{
        type:"Success",
        payload:todo
    }

}

//reducer

const todoPeducer=(state=initalstate,action)=>{
    switch (action.type) {
        case "Requset":
            return{
                ...state,
                isLodding:true
            }
        case "fail":
            return{
                ...state,
                iserror:action.payload,
                isLodding:false,
            }

        case "Success":
            return{
                ...state,
                isLodding:false,
                todo:action.payload
            }
    
        default:
            return state
    }

}

//async action creator

const fatchData=()=>{
    return(dispatch)=>{
        dispatch(gettodorequest())
        axios.get(api)
        .then((res)=>{
           dispatch(gettodosuccess(res.data))
        })
        .catch((error)=>{
           dispatch(gettodofail(error.message))
        })
    }
    
}

//store
const store=createStore(todoPeducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fatchData())