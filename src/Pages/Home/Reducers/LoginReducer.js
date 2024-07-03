
const initialState ={
    user : { 
    email : "",
    passWord : ""
    }
   
}

export const loginReducer = (state=initialState, action) => {
    let currentState = state
    switch(action.type) {
        case  "POST_LOGIN_SUCCESS":
            currentState = {...currentState,
                user : action.payload.userDetails
            }
            break;

            default:
                break;
    } 
    return currentState   
}