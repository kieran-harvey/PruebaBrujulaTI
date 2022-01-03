import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers/index'


//create store
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunkMiddleware)//apply middleware for async functions
);
