import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCartAPI } from "../API/CartAPI"




  export const fetchCartsThunk = createAsyncThunk("cart/fetchCartsThunk", async (data) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log("carts",cart)
    return cart
  })