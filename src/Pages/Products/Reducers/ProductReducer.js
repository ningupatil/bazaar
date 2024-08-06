

import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts, fetchProductsThunk } from "../Actions/ProductAction"

const initialState = {
    products : [],
}

const productReducerSlice = createSlice({
    name : "products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
            console.log("---action----",action)
            state.products = state.products.concat(action.payload)
        })
    } 
})

export default productReducerSlice.reducer