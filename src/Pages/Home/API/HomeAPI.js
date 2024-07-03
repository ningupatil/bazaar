
import { getAPI } from "../../../Uilities/HttpRequestHandler"
import { FETCH_PRODUCTS_API } from '../../../Common/Constants/ApiEndspoints/ProductsApiEndpoints'

export const fetchProductsAPI = () => {
    return new Promise((resolve, reject) => {
        getAPI(FETCH_PRODUCTS_API)
        .then( (response) => {
            
            //logic
            let promotedProducts = []
            for (let index1 = 0;index1<response.products.length;index1++) {
                let product = response.products[index1]
                let category = product.category
                let isAdded = false
                for (let index2 = 0;index2<promotedProducts.length;index2++) {
                    let promotedProduct = promotedProducts[index2]
                    if (promotedProduct.category === product.category) {
                        promotedProduct.offerProducts.push(product)
                        isAdded = true
                    }
                }
                if( !isAdded ) {
                    promotedProducts.push( {
                        category : category,
                        offerProducts : [product]
                    })
                }
            }
            resolve(promotedProducts)
        })
        .catch( (error) => {
            reject(error)
        })
    })
}