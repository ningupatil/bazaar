
import { createAsyncThunk } from "@reduxjs/toolkit"
import { postSignUpAPI } from "../API/SignupAPI"

export const postUserThunk = createAsyncThunk("user/postUserThunk", async (data) => {
    const user = await postSignUpAPI(data.userDetails)
    return user
})