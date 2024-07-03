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
            break;

            default:
            break;
    }
    return currentState;
}