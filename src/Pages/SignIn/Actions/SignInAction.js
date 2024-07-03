
import { signIn } from "../../../Uilities/IsSignIn"
import { getSignInAPI } from "../API/SignInAPI"


export const signInActionBinder =(userDetails) => {
    return((dispatch) => {
        
        getSignInAPI(userDetails.userId)
        .then((apiResponse) => { 
           const isSigninSuccess = signIn(userDetails, apiResponse);
           console.log("isSigninSuccess", isSigninSuccess)
           if (isSigninSuccess) {
            dispatch( {
                type : "POST_SIGNIN_SUCCESS",
                payload : {user : apiResponse}
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
