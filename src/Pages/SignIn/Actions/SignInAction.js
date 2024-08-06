
import { createAsyncThunk } from "@reduxjs/toolkit"
import { signIn } from "../../../Uilities/IsSignIn"
import { getSignInAPI } from "../API/SignInAPI"

export const fetchUserThunk = createAsyncThunk("user/fetchUserThunk", async (data) => {
    const user = await getSignInAPI(data.userDetails.userId)
    const isSigninSuccess = signIn(data.userDetails, user.data)
    if (isSigninSuccess) {
        return user
    }
    else {
        return null
    }
    
})
