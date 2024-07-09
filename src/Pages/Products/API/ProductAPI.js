import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchProductsAPI = (category, pageSkip, pageLimit) => {
    return new Promise( (resolve,reject) => {
        getAPI(`https://dummyjson.com/products?limit=${pageLimit}&skip=${pageSkip}`)
        .then((response) => {
            //logic
            if(category) {
                let products = []
                for(let index=0;index<response.products.length;index++) {
                    let product = response.products[index]
                    if(product.category === category) {
                        products.push(product)
                    }
                }
                resolve(products)
            }
            else {
                resolve(response.products)
            }   
        })
        .catch((error) => {
            reject(error)
        })
    })
}