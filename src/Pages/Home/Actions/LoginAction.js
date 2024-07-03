import { postLoginAPI } from "../API/LoginApi"


export const loginActionBinder = (userDetails) => {
    return ((dispatch) => {
        postLoginAPI(userDetails)
        .then((userDetails) => {
            dispatch( {
                type : "POST_LOGIN_SUCCESS",
                payload : {userDetails}
            })
        })
        .catch(() => {
            dispatch( {
                type : "POST_LOGIN_FAIL",
                payload : null
            })
        })
    })
}