// import { combineReducers } from "redux";
// import { homeReducer } from "../Pages/Home/Reducers/HomeReducer";
import { productReducer } from "../Pages/Products/Reducers/ProductReducer";
// import { cartReducer } from "../Pages/Cart/Reducers/CartReducer";

// import { loginReducer } from "../Pages/Home/Reducers/LoginReducer";
// import { signInReducer } from "../Pages/SignIn/Reducers/SignInReducer";
// import { signUpReducer } from "../Pages/SignUp/Reducers/SignUpReducer";
// import { singleProductReducer } from "../Pages/SingleProduct/Reducer/SingleProductReducer";




export const reducers = combineReducers({
//     homeData : homeReducer,
    productData : productReducer,
//     cartData : cartReducer,
//     signUpData : signUpReducer,
//     loginData : loginReducer,
//     signinData : signInReducer,
//     singleProductData : singleProductReducer
})

