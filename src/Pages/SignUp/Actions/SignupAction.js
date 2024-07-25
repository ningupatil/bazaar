
import { createAsyncThunk } from "@reduxjs/toolkit"
import { postSignUpAPI } from "../API/SignupAPI"

 

// export const signUpActionBinder = (userDetails) => {
//     return((dispatch) => {
//         console.log('--userDetails--',userDetails)
//         postSignUpAPI(userDetails)
//         .then((response) => {
//             console.log('--apiResponse--',response)
//             dispatch( {
//                 type : "POST_SIGNUP_SUCCESS",
//                 payload : { user: response }
//             })
//         })
//         .catch(() => {
//             dispatch( {
//                 type : "POST_SIGNUP_FAIL",
//                 payload : null
//             })
//         })
//     }
//     )
// }

export const postUserThunk = createAsyncThunk("user/postUserThunk", async (data) => {
    const user = await postSignUpAPI(data.userDetails)
    return user
})