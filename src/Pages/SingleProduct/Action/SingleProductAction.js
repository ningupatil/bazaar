import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/SingleProductAPI"


export const fetchSingleProductThunk = createAsyncThunk("product/fetchSingleProductThunk", async (data) => {
    const product = await fetchProductsAPI(data.productId)
    return product
})