
import { createAsyncThunk } from "@reduxjs/toolkit"
import { signIn } from "../../../Uilities/IsSignIn"
import { getSignInAPI } from "../API/SignInAPI"


// export const signInActionBinder =(userDetails) => {
//     return((dispatch) => {
        
//         getSignInAPI(userDetails.userId)
//         .then((apiResponse) => { 
//             console.log("111111111111111111apiResponse1111111111111111", apiResponse)
//            const isSigninSuccess = signIn(userDetails, apiResponse.data);
//            console.log("isSigninSuccess", isSigninSuccess)
//            if (isSigninSuccess) {
//             dispatch( {
//                 type : "POST_SIGNIN_SUCCESS",
//                 payload : {user : apiResponse.data}
//                })
//            } else {
//             dispatch( {
//                 type : "POST_SIGNIN_FAIL",
//                 payload : null
//             })
//            }
           
//         })
//         .catch(() => {
//             dispatch( {
//                 type : "POST_SIGNIN_FAIL",
//                 payload : null
//         })
//     })
// })
// }

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
