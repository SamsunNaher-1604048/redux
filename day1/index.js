const{createStore}=require("redux")

//state
//initialization os state.
const initalCounterstate={
    count:0,
}



//action is abject.IN ACTION THERE IS two thing 1.type,2.paylode
const Increment=()=>{
    return{
        type:'INCREMENT',
    };
};

const Decrement=()=>{
    return{
        type:'DECREMENT',
    };
};

const Adduser=()=>{
    return{
        type:'ADD_USER',
        payload:{name:'nill'}//data pass to reducer.
    };
};

//create reducer for counter.reducer is a pure function.it is handal our logic.

const countReducer=(state=initalCounterstate,action)=>{
switch(action.type){
    case "INCREMENT":
        return{
            count:state.count+1
        }
    
    case "DECREMENT":
       return{
        count:state.count-1
       }

    default:
        state;
 }

}


//store  getState() dispatch() subscribe()
//create store

const store = createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(Increment())
