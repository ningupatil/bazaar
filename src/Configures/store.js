// import { applyMiddleware, createStore } from 'redux';

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productreducer from "../Pages/Products/Reducers/ProductReducer"
import  homeReducer from "../Pages/Home/Reducers/HomeReducer"
import SignInReducer from "../Pages/SignIn/Reducers/SignInReducer"
import SignUpReducer from "../Pages/SignUp/Reducers/SignUpReducer"
import  singleProductReducer  from "../Pages/SingleProduct/Reducer/SingleProductReducer"
import cartReducer from "../Pages/Cart/Reducers/CartReducer"

const reducers = combineReducers({
    productData : productreducer,
    homeData : homeReducer,
    signinData : SignInReducer,
    signUpData : SignUpReducer,
    singleProductData : singleProductReducer,
    cartData : cartReducer
})

const store = configureStore({
    reducer : reducers
})

export default store 