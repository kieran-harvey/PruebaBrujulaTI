const selectedIdsReducer = (state =[],action) =>{
    switch(action.type){
        case "ADD_SELECTED": //add new id
            return [...state,action.payload]
        case "REMOVE_SELECTED": //remove id
            return state.filter(num => num!==action.payload);
        case "RESET_SELECTED": // reset state to empty array
            return state=[];
        case "SELECT_ALL":
            return [...state,...action.payload];
        case "UNSELECT_ALL":
            return state=[]
        default:
            return state;
    }
}

export default selectedIdsReducer;