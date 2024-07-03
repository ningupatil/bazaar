import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchProductsAPI = (category) => {
    console.log("---category---",category)
    return new Promise( (resolve,reject) => {
        getAPI("https://dummyjson.com/products")
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
                console.log('--- products ', products);
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