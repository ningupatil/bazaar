
import { signIn } from "../../../Uilities/IsSignIn"
import { getSignInAPI } from "../API/SignInAPI"


export const signInActionBinder =(userDetails) => {
    return((dispatch) => {
        
        getSignInAPI(userDetails.userId)
        .then((apiResponse) => { 
            console.log("111111111111111111apiResponse1111111111111111", apiResponse)
           const isSigninSuccess = signIn(userDetails, apiResponse.data);
           console.log("isSigninSuccess", isSigninSuccess)
           if (isSigninSuccess) {
            dispatch( {
                type : "POST_SIGNIN_SUCCESS",
                payload : {user : apiResponse.data}
               })
           } else {
            dispatch( {
                type : "POST_SIGNIN_FAIL",
                payload : null
            })
           }
           
        })
        .catch(() => {
            dispatch( {
                type : "POST_SIGNIN_FAIL",
                payload : null
        })
    })
})
}
