import { fetchProductsAPI } from "../API/ProductAPI"
import { FETCH_PRODUCTS_SUCCESS } from "../Constants/actionTypeConstant"





export const productActionBinder = (category, pageSkip, pageLimit) => {
    return((dispatch) => {
        // console.log('---- pageSkip, pageLimit ', pageSkip, pageLimit)
        fetchProductsAPI(category, pageSkip, pageLimit)
        .then((Products) => {
            // console.log('---- Products length ', Products.length)
            dispatch( {
                type : FETCH_PRODUCTS_SUCCESS,
                payload : {Products}
            })
        })
        .catch(() => {
            dispatch( {
                type : 'FETCH_PRODUCTS_FAIL',
                payload : null
            })
        })
        // console.log("---in ProductActionBinderCallBack dispatching--- ")
        // dispatch({
        //     type: "FETCH_PRODUCTS_SUCCESS",
        //     payload: {
        //         products : [
        //             {id:"1", "title":"Samsung", "imagePath":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTXNWImqld3PgH94pFVyoek8bTY8gd1d4xQ&usqp=CAU","Price":"10000"},
        //             {id:"2", "title":"Vivo", "imagePath":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5vFENA7haxDibiYIoDzF8r8yi-AHqApcMw&usqp=CAU","Price":"15000"}
        //           ]
        //     }
        // })
    })
} 