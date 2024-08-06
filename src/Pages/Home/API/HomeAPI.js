
import { getAPI } from "../../../Uilities/HttpRequestHandler"
import { FETCH_PRODUCTS_API } from '../../../Common/Constants/ApiEndspoints/ProductsApiEndpoints'
const lodash =require("lodash")
export const fetchProductsAPI = async () => {
    
    let response = await getAPI(FETCH_PRODUCTS_API)
    if(response && response.data && response.data.products) {
        const data = response.data;
        //logic
        let promotedProducts= []
       
        lodash.forEach(data.products, (product) => {
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
        return {promotedProducts};
        // resolve(promotedProducts)
    } else {
        return response;
    }
    }