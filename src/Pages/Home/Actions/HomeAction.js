
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/HomeAPI"
import { FETCH_PROMOTEDPRODUCTS_SUCCESS } from '../Constants/ActionTypeConstants'



export const fetchPromotedProductsThunk = createAsyncThunk("promotedProducts/fetchPromotedProductsThunk", async (data) => {
    const promotedProducts = await fetchProductsAPI()
    return promotedProducts
})