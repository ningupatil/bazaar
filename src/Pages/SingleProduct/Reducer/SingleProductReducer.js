import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleProductThunk } from "../Action/SingleProductAction";

const initialState = {
    product : {}
}

// export const singleProductReducer = (state=initialState, action) => {
//     let currentState = state
//     switch (action.type) {
//         case "FETCH_PRODUCTS_SUCCESS" :
//             currentState = {...currentState,
//                 product : action.payload.productDetails
//             }
//             break;

//             default:
//             break;    

//     }
//     return currentState
// }

const singleproductReducerSlice = createSlice({
    name : "product",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchSingleProductThunk.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export default singleproductReducerSlice.reducer