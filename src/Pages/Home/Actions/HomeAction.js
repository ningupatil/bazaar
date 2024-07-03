
import { fetchProductsAPI } from "../API/HomeAPI"
import { FETCH_PROMOTEDPRODUCTS_SUCCESS } from '../Constants/ActionTypeConstants'

export const homeActionBinder = () => {
    // console.log("---in ActionBinder--- ")
    return((dispatch) => {
        fetchProductsAPI()
        .then( (promotedProducts) => {
           dispatch ( {
                   type :  FETCH_PROMOTEDPRODUCTS_SUCCESS,
                   payload : { promotedProducts }
                   
           }) 
          
        })
        .catch( () => {
            dispatch ( {
                type : "FETCH_PROMOTEDPRODUCTS_FAIL",
                payload : null
        }) 
        })
    })
}

