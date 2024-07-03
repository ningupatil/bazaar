import { FETCH_PROMOTEDPRODUCTS_SUCCESS } from "../Constants/ActionTypeConstants";

const initialState = {
    promotedProducts:[]
}

export const homeReducer = (state=initialState, action) => {
    let currentState = state;
    switch (action.type) {
        case FETCH_PROMOTEDPRODUCTS_SUCCESS:
            // console.log("---in reducer--- ")
            currentState = {...currentState,
                promotedProducts: action.payload.promotedProducts
            }
        break;

        default:
        break;
    }   
 return currentState;
}