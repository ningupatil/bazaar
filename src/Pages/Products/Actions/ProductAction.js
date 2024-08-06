import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/ProductAPI"
import { FETCH_PRODUCTS_SUCCESS } from "../Constants/actionTypeConstant"


export const fetchProductsThunk = createAsyncThunk("products/fetchProductsThunk", async (data) => {
    console.log(" thunk - category, pageSkip, pageLimit ", data.category, data.pageSkip, data.pageLimit)  
    const products = await fetchProductsAPI(data.category, data.pageSkip, data.pageLimit)
    console.log("___in fetchProducts___", products)  
    return products
})