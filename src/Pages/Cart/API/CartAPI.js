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

    // return new Promise ((resolve,reject) => {
    //     getAPI('https://dummyjson.com/carts')
    //     .then((response) => {
    //         //logic
    //         console.log("response",response)
    //         resolve(response.carts)
    //     })
    //     .catch((error) => {
    //         reject(error)
    //     })
    // })
} 