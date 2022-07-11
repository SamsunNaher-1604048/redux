//initial state

const {createStore}=require('redux');

const Initalstate={
    count:0
}

//action

const increment=()=>{
    return{
        type:'INCREMENT',
    }
}

const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}

const reset =()=>{
    return{
        type:'RESET'
    }
}

const incermentbyvalur=(value)=>{
    return{
        type:'By_Value',
        paylode:value
    }

}


//reducer

const CountReducer=(state=Initalstate,action)=>{
    switch(action.type){
        case "INCREMENT":
           return{
            count:state.count+5
           }
        
        case "DECREMENT":
            return{
                count:state.count-1
            }

        case "RESET":
            return{
                count:0
            } 
        
        case "By_Value":
            return{
                count:state.count+action.paylode

            }

        default:
            state;
    }

}

//store

const store = createStore(CountReducer)
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incermentbyvalur(8))
store.dispatch(reset())


