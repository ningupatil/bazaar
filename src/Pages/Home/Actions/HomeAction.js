
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/HomeAPI"
import { FETCH_PROMOTEDPRODUCTS_SUCCESS } from '../Constants/ActionTypeConstants'

// export const homeActionBinder = () => {
//     // console.log("---in ActionBinder--- ")
//     return((dispatch) => {
//         fetchProduction(dispatch)
//         // fetchProductsAPI()
//         // .then( (promotedProducts) => {
//         //    dispatch ( {
//         //            type :  FETCH_PROMOTEDPRODUCTS_SUCCESS,
//         //            payload : { promotedProducts }
                   
//         //    }) 
          
//         // })
//         // .catch( () => {
//         //     dispatch ( {
//         //         type : "FETCH_PROMOTEDPRODUCTS_FAIL",
//         //         payload : null
//         // }) 
//         // })
//     })
// }

// const fetchProduction = async (dispatch) => {
//     const response = await fetchProductsAPI();
//     if(response && response.promotedProducts) {
//         dispatch ( {
//             type :  FETCH_PROMOTEDPRODUCTS_SUCCESS,
//             payload : { promotedProducts: response.promotedProducts }
//         })
//     } else {
//         dispatch ( {
//             type : "FETCH_PROMOTEDPRODUCTS_FAIL",
//             payload : null
//         }) 
//     }       
// }

export const fetchPromotedProductsThunk = createAsyncThunk("promotedProducts/fetchPromotedProductsThunk", async (data) => {
    const promotedProducts = await fetchProductsAPI()
    return promotedProducts
})