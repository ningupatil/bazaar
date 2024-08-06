import { createSlice } from "@reduxjs/toolkit";
import { fetchSingleProductThunk } from "../Action/SingleProductAction";

const initialState = {
    product : {}
}

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