const initialState = {
    carts : []
}

export const cartReducer = (state=initialState,action) => {
    let currentState = state
    switch(action.type) {
        case "FETCH_CARTITEMS_SUCCESS" :
            currentState = {...currentState,
                carts : action.payload.carts
            }
            console.log("rrrrrrrcartsrrrrr", currentState)
            break;

            default:
            break;
    }
    return currentState;
}