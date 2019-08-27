const initial_state={
    valuex:0,
    valuey:0
}

export default Reducer(state=initial_state,action){
    switch(action.type){
        case "incrementY":
            return{
                ...state,
                valuey:state.valuey+1
            }
         case "incrementX":
             return{
                 ...state,
                valuex:state.valuex+1
             }   
        default:
            return state;
    }
    
}