import { FETCH_PRODUCTS_SUCCESS } from "../Constants/actionTypeConstant"

const initialState = {
    Products : []
}

export const productReducer = (state=initialState, action) => {
    let currentState = state
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS :
            currentState = {...currentState,
                Products : currentState.Products.concat(action.payload.Products)
            }
            console.log("___in productReducer fun--",currentState)
            break;
        // case FETCH_PRODUCTS_SUCCESS :
        //     currentState = {...currentSx tate,
        //         Products : action.payload.Products.concat(Array.from({length : 20}))
        //     }
            default:
            break;
    }
    return currentState;
}