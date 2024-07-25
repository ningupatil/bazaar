import { getAPI } from "../../../Uilities/HttpRequestHandler"


export const fetchProductsAPI = async (category, pageSkip, pageLimit) => {
    // return new Promise( (resolve,reject) => {
        console.log("___in fetchProducts___")
    const response = await getAPI(`https://dummyjson.com/products?limit=${pageLimit}&skip=${pageSkip}`)
    if (response && response.data && response.data.products) {
        if (category) {
            let products = []
            for (let index = 0; index < response.data.products.length; index++) {
                let product = response.data.products[index]
                if (product.category === category) {
                    products.push(product)
                }
            }
            return products
        }
        else {
            return response.data.products
        }
    } else {
        return response
    }
    
        // getAPI(`https://dummyjson.com/products?limit=${pageLimit}&skip=${pageSkip}`)
        // .then((response) => {
        //     //logic
        //     if(category) {
        //         let products = []
        //         for(let index=0;index<response.products.length;index++) {
        //             let product = response.products[index]
        //             if(product.category === category) {
        //                 products.push(product)
        //             }
        //         }
        //         resolve(products)
        //     }
        //     else {
        //         resolve(response.products)
        //     }   
        // })
        // .catch((error) => {
        //     reject(error)
        // })
    // })
}