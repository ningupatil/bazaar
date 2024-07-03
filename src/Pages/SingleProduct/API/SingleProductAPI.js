import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchProductsAPI = (productId) => {
    return new Promise((resolve,reject) => {
        getAPI("https://dummyjson.com/products")
        .then((response) => {
            console.log("response",response)
                let productDetails = null
                for(let index=0;index<response.products.length;index++) {
                    let product = response.products[index]
                    if(product.id == productId) {
                        productDetails = product
                        break;
                    }
                }
            resolve(productDetails)
        })
        .catch((error) => {
            reject(error)
        })
    })
}