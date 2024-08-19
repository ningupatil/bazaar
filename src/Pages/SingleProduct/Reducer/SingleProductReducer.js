import { createSlice } from "@reduxjs/toolkit";
import { fetchCartProductThunk, fetchSingleProductThunk } from "../Action/SingleProductAction";

const initialState = {
    product : {},
    cart : []
}

const singleproductReducerSlice = createSlice({
    name : "product",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchSingleProductThunk.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(fetchCartProductThunk.fulfilled, (state,action) => {
            state.cart = action.payload
        })
    }
})

export default singleproductReducerSlice.reducer