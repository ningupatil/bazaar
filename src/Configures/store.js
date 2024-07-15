import { applyMiddleware, createStore } from 'redux';

// import { configureStore } from "@reduxjs/toolkit";
// import { reducers } from "./Reducers";

import { reducers } from './Reducers';
import { thunk } from 'redux-thunk'

const thunkMiddleWare =  applyMiddleware(thunk)

const store = createStore(reducers,thunkMiddleWare)

export default store 


// export const store = configureStore(reducers)