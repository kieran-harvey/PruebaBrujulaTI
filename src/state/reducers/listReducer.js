const listReducer = (state=[ //initial state includes two objects // set empty array for empty initial state
    {
        text:"hello 1",
        id:1
    },
    {
        text:"hello 2",
        id:2
    }
], action) => {
    switch(action.type){
        case 'ADD_TEXT': //adding text return state + object passed through payload
            return [...state,action.payload];
        case 'REMOVE_TEXT': //remove text return filter state do not include id passed from payload
            return state.filter(state => !action.payload.includes(state.id));
        case 'REMOVE_DBLCLICK':{ //same as remove text but we don't have to check if they're more elements selected
            return state.filter(state => state.id !== action.payload);
        }
        default:
            return state
    }
}

export default listReducer;


