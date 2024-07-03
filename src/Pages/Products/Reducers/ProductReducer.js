import { FETCH_PRODUCTS_SUCCESS } from "../Constants/actionTypeConstant"

const initialState = {
    Products : []
}

export const productReducer = (state=initialState, action) => {
    let currentState = state
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS :
            // console.log("---in reducer--- ", action.payload)
            currentState = {...currentState,
                Products : action.payload.Products
            }
            break;
 
            default:
            break;
    }
    return currentState;
}