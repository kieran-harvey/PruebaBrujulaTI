//action creator functions

export const addItem = (item) => {
    return(dispatch) =>{
        dispatch({
            type:'ADD_TEXT',
            payload:item
        })
    }
}

export const removeItem = (item) => {
    return(dispatch) =>{
        dispatch({
            type:'REMOVE_TEXT',
            payload:item
        })
    }
}

export const removeItemDblClick = (id) => {
    return(dispatch) =>{
        dispatch({
            type:'REMOVE_DBLCLICK',
            payload:id
        })
    }
}

export const addSelectedIds = (id) => {
    return (dispatch) => {
        dispatch({
            type:'ADD_SELECTED',
            payload:id
        })
    }
}

export const removeSelectedIds = (id) => {
    return (dispatch) => {
        dispatch({
            type:'REMOVE_SELECTED',
            payload:id
        })
    }
}

export const resetSelectedIds = () =>{
    return (dispatch) => {
        dispatch({
            type:"RESET_SELECTED"
        });
    }
}

export const selectAll = (idArray) => {
    return (dispatch) => {
        dispatch({
            type:'SELECT_ALL',
            payload:idArray
        })
    }
}



export const unselectAll = () => {
    return (dispatch => {
        dispatch({
            type:'UNSELECT_ALL'
        })
    })
}