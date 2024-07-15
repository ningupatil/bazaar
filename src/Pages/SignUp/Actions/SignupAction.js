
import { postSignUpAPI } from "../API/SignupAPI"

 

export const signUpActionBinder = (userDetails) => {
    return((dispatch) => {
        
        postSignUpAPI(userDetails)
        .then((apiResponse) => {
            console.log('--apiResponse--',apiResponse)
            dispatch( {
                type : "POST_SIGNUP_SUCCESS",
                payload : { user: apiResponse.data }
            })
        })
        .catch(() => {
            dispatch( {
                type : "POST_SIGNUP_FAIL",
                payload : null
            })
        })
    }
    )
}