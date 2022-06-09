export const reducer = (state , action ) => { 
    
    if (action.type ==="REMOVE"){
        return {...state,toggle : true}
    }
    if (action.type ==="TOGGLE"){
        return {...state,toggle : false}
    }
    return {...state }
    }
