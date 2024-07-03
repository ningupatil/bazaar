import { fetchCartAPI } from "../API/CartAPI"



export const cartActionBinder = () => {
    return ((dispatch) => {
      fetchCartAPI()
      .then((carts) => {
        dispatch( {
          type : "FETCH_CARTITEMS_SUCCESS",
          payload : {carts}
        })
      })
      .catch(() => {
        dispatch({
          type : "FETCH_CARTITEMS_FAIL",
          payload : null
        })
      })
        // dispatch({
        //     type : "FETCH_CART_SUCCESS",
        //     payload : {
                
        //             id: "1",
        //             cartItems: [
        //             {
        //               id: "1",
        //               product: {
        //                 id: "1",
        //                 "title": "Motorla",
        //                 "imagePath": "",
        //                 "price": "15000"
        //               }, 
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "2",
        //               product: {
        //                 id: "2",
        //                 "title": "Dell",
        //                 "imagePath": "",
        //                 "price": "65000"
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "3",
        //               product: {
        //                 id: "3",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "4",
        //               product: {
        //                 id: "4",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "5",
        //               product: {
        //                 id: "1",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "6",
        //               product: {
        //                 id: "2",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "7",
        //               product: {
        //                 id: "3",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             },
        //             {
        //               id: "8",
        //               product: {
        //                 id: "4",
        //                 "title": "",
        //                 "imagePath": "",
        //                 "price": ""
        //               },
        //               "CartPrice": ""
        //             }
        //           ]
                
        //     }
        // })
    })
}