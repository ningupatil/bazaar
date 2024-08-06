import { FETCH_PRODUCTS_API } from "../../../Common/Constants/ApiEndspoints/ProductsApiEndpoints"
import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchCartAPI = async () => {

    const response = await getAPI('https://dummyjson.com/carts')
    console.log("zzzzzzzzzResponseZZZZZZZZZZZZZZZ", response)
    if(response) {
        return response
    } else {
        return response
    }
} 