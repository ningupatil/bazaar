import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/SingleProductAPI"


// export const singleProductActionBinder = (productId) => {
//     return((dispatch) => {
//         fetchProductsAPI(productId)
//         .then((productDetails) => {
//             dispatch( {
//                 type : "FETCH_PRODUCTS_SUCCESS",
//                 payload : {productDetails}
//             })
//         })
//         .catch(() => {
//             dispatch( {
//                 type : "FETCH-PRODUCTS-FAIL",
//                 payload : null
//             })
//         })
//     })
// }

export const fetchSingleProductThunk = createAsyncThunk("product/fetchSingleProductThunk", async (data) => {
    const product = await fetchProductsAPI(data.productId)
    return product
})