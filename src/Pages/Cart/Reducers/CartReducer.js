import { createSlice } from "@reduxjs/toolkit"
import { fetchCartsThunk } from "../Actions/CartAction"
import { Category, Description } from "@mui/icons-material"

const initialState = {
    cart : [
        // {
        //     id : "",
        //     offer : {
        //         offerPercentage : ""
        //     },
        //     product : {
        //         id : "",
        //         title : "",
        //         description : "",
        //         category : "",
        //         price : "",
        //     },
        //     cartPrice : ""
        // },
    ]
}

const cartReducerSlice = createSlice({
    name : "carts",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchCartsThunk.fulfilled, (state, action) => {
            console.log("action",action)
            state.cart = action.payload
        })
    }
})

export default cartReducerSlice.reducer