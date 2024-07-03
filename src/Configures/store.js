import { applyMiddleware, createStore } from 'redux';

import { reducers } from './Reducers';
import { thunk } from 'redux-thunk'

const thunkMiddleWare =  applyMiddleware(thunk)

const store = createStore(reducers,thunkMiddleWare)

export default store 