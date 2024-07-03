import { fetchProductsAPI } from "../API/SingleProductAPI"


export const singleProductActionBinder = (productId) => {
    return((dispatch) => {
        fetchProductsAPI(productId)
        .then((productDetails) => {
            dispatch( {
                type : "FETCH_PRODUCTS_SUCCESS",
                payload : {productDetails}
            })
        })
        .catch(() => {
            dispatch( {
                type : "FETCH-PRODUCTS-FAIL",
                payload : null
            })
        })
    })
}