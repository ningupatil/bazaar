import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchProductsAPI = async (productId) => {

    const response = await getAPI("https://dummyjson.com/products")
    if (response) {
        console.log("response", response)
        let productDetails = null
        for (let index = 0; index < response.data.products.length; index++) {
            let product = response.data.products[index]
            if (product.id == productId) {
                productDetails = product
                break;
            }
        }
        return productDetails
    } else {
        return response
    }
}