import { createSlice } from "@reduxjs/toolkit";
import { postUserThunk } from "../Actions/SignupAction";


const initialState = {
    isSignedup: false,
    user : {
        firstName : "",
        lastName : ""
    }
}



const signUpReducerSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(postUserThunk.fulfilled, (state, action) => {
            console.log("----action----",action)
            state.isSignedup = true
            state.user = action.payload.data
        })
    }
})

export default signUpReducerSlice.reducer