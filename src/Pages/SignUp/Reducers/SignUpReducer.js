

const initialState = {
    isSignedup: false,
    user : {
        firstName : "",
        lastName : ""
    }
}

export const signUpReducer = (state=initialState,action) => {
    let currentState = state;
    switch (action.type) {
        case "POST_SIGNUP_SUCCESS":
            // console.log("---in reducer--- ")
            currentState = {...currentState,
                user : action.payload.user,
                isSignedup: true
            }
        break;
        case "POST_SIGNUP_FAIL":
            // console.log("---in reducer--- ")
            currentState = {...currentState,
                user : null,
                isSignedup: true
            }
        break;
        default:
        break;
    }   
 return currentState
}