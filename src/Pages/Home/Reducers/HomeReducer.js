import { createSlice } from "@reduxjs/toolkit";
import { FETCH_PROMOTEDPRODUCTS_SUCCESS } from "../Constants/ActionTypeConstants";
import { fetchPromotedProductsThunk } from "../Actions/HomeAction";

const initialState = {
    promotedProducts:[]
}
export const homeReducerSlice = createSlice({
    name : "promotedProducts",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchPromotedProductsThunk.fulfilled, (state, action) =>{
            state.promotedProducts = action.payload.promotedProducts
        })
    }
})

export default homeReducerSlice.reducer