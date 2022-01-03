import { combineReducers } from "redux";
import listReducer from './listReducer';
import selectedIdsReducer from "./selectedIdsReducer";
import undoable from 'redux-undo';

//combine all reducers
const reducers = combineReducers({
    list:undoable(listReducer,{limit:1}), //use undoable on the list state for revert purposes //set limit to 1 for only one revert action
    selectedIds:selectedIdsReducer
});

export default reducers;