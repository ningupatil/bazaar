import { createSlice } from "@reduxjs/toolkit"
import { fetchCartsThunk } from "../Actions/CartAction"

const initialState = {
    cart : {}
}

const cartReducerSlice = createSlice({
    name : "carts",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchCartsThunk.fulfilled, (state, action) => {
            console.log("action",action)
            state.cart = action.payload.product
        })
    }
})

export default cartReducerSlice.reducer