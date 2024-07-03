

const initialState = {
    isSignIn : false,
    user : {
        firstName : "",
        lastName : ""
    }
}

export const signInReducer = (state=initialState, action) => {
    let currentState = state
    switch (action.type) {
        case "POST_SIGNIN_SUCCESS" : 
            currentState = {...currentState,
                user : action.payload.user,
                isSignIn : true
            }
            break;
        case "POST_SIGNIN_FAIL" :
            currentState ={...currentState,
                user : null,
                isSignIn : true
            } 
            break;
            
            default:
                break;
    }
    return currentState
}