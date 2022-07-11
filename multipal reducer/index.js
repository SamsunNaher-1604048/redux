const { createStore, combineReducers, applyMiddleware} = require("redux")
const { default: logger } = require("redux-logger")

const produceState={
    product:["pen","paper"],
    total:2
}

 const cartState={
    cart:["color"],
    total:1
 }

//action product
const getProduct=()=>{
    return{
        type:'GET'
    }
}

const addprojuct=(product)=>{
    return{
        type:'ADD',
        paylode:product
    }
}


//cart action
const getCart=()=>{
    return{
        type:'GETCART'
   }
 }

 const addCart=(product)=>{
     return{
        type:'ADDCART',
        paylode:product
     }
 }


//reducer (product)
const productReducer=(state=produceState,action)=>{
    switch (action.type) {
        case 'GET':
            return{
                ...state
            }

        case 'ADD':
            return{
                total:state.total+1,
                product:[...state.product,action.paylode]
            }
    
        default:
         return state;
    }

}

//reducer(cart)
 const cartreducer=(state=cartState,action)=>{
    switch (action.type) {
         case "GETCART":
            return{
                ...state
            }

         case "ADDCART":
            return{
                 total:state.total+1,
                cart:[...state.cart,action.paylode]
             }
         default:
            return state;
     }

 }

//for multipal reducer.combine rteducer
 const rootReducer = combineReducers({
     productR:productReducer,
     cartR:cartreducer
 })

//store

const store = createStore(productReducer,applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProduct())
store.dispatch(addprojuct("book"))

 store.dispatch(getCart())
 store.dispatch(addCart("color pen"))