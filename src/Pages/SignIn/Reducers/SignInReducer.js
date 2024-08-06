import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk } from "../Actions/SignInAction";


const initialState = {
    isSignIn : false,
    user : {
        firstName : "",
        lastName : ""
    }
}

 const signInReducerSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
            console.log("888action888",action)
            state.isSignIn = true
            state.user = action.payload.data
        })
    }
})

export default signInReducerSlice.reducer