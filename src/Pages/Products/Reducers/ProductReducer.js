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
                Products : currentState.Products.concat(action.payload.Products)
            }
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