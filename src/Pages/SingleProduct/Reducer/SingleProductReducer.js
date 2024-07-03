
const initialState = {
    product : {}
}

export const singleProductReducer = (state=initialState, action) => {
    let currentState = state
    switch (action.type) {
        case "FETCH_PRODUCTS_SUCCESS" :
            currentState = {...currentState,
                product : action.payload.productDetails
            }
            break;

            default:
            break;    

    }
    return currentState
}