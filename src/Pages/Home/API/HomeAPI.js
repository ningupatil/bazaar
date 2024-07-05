
import { getAPI } from "../../../Uilities/HttpRequestHandler"
import { FETCH_PRODUCTS_API } from '../../../Common/Constants/ApiEndspoints/ProductsApiEndpoints'
const lodash =require("lodash")
export const fetchProductsAPI = () => {
    return new Promise((resolve, reject) => {
        getAPI(FETCH_PRODUCTS_API)
        .then( (response) => {
            
            //logic
            let promotedProducts= []
            //   for(let index1 = 0;index1<response.products.length;index1++) {
            //     let product = response.products[index1]
            //     let category = product.category
            //     let isAdded = false
            //     for (let index2 = 0;index2<promotedProducts.length;index2++) {
            //         let promotedProduct = promotedProducts[index2]
            //         if (promotedProduct.category === product.category) {
            //             promotedProduct.offerProducts.push(product)
            //             isAdded = true
            //         }
            //     }
            //     if( !isAdded ) {
            //         promotedProducts.push( {
            //             category : category,
            //             offerProducts : [product]
            //         })
            //     }

            // }
            lodash.forEach(response.products, (product) => {
                // console.log("---forEachLoad---")
                let category = product.category
                let isAdded = false
                console.log("--productid--",product.id)
                
                lodash.forEach(promotedProducts, (promotedProduct) => {
                    // console.log("**** in lodash")
                    if (promotedProduct.category === product.category) {
                        promotedProduct.offerProducts.push(product)
                        isAdded = true
                        console.log("--isadded?--",product.id)
                    }
                })
                if( !isAdded ) {
                    console.log("--Added--")
                    promotedProducts.push( {
                        category : category,
                        offerProducts : [product]
                    })
                }
                
            })
            console.log("end of loop")
            resolve(promotedProducts)
        })
        .catch( (error) => {
            reject(error)
        })
    })
}

