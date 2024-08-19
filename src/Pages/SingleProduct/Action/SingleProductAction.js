import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "../API/SingleProductAPI"
import { saveObjectInLocalStorage } from "../../../Uilities/LocalStorageHandler"


export const fetchSingleProductThunk = createAsyncThunk("product/fetchSingleProductThunk", async (data) => {
    const product = await fetchProductsAPI(data.productId)
    return product
})

export const fetchCartProductThunk = createAsyncThunk("product/fetchCartProductThunk", async(data) => {
    let cartItem = {
        id :  "id",
        offer : "offer",
        product : data
  
      }
      console.log("hiiiiiii")
      let cart =  localStorage.getItem('cart');
      // let cart = localStorage.getItem("cart")
      if (cart !== null) {
        let cartStr = localStorage.getItem("cart")
        let cart = JSON.parse(cartStr)
        cart.push(cartItem)
        saveObjectInLocalStorage("cart", cart)
      }
      else {
        let cart = [cartItem]
        console.log("carts",cart)
        saveObjectInLocalStorage("cart", cart)
        JSON.parse(localStorage.getItem('cart'))
        console.log("carts",cart)
      }
      
      return cart
})