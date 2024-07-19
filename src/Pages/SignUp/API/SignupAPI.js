
import { postAPI } from "../../../Uilities/HttpRequestHandler"


export const postSignUpAPI = async (userDetails) => {
    console.log("userDetails", userDetails)
    const response = await postAPI("https://gorest.co.in/public/v2/users", userDetails)
    console.log("response", response)
    if(response) {
        return response
    } else {
        return response
    }

//     return new Promise ((resolve,reject) => {
//         postAPI("https://gorest.co.in/public/v2/users", userDetails)
//         .then((response) => {
//             console.log("response",response)
//             resolve(response)
//         })
//         .catch((error) => {
//             reject(error)
//         })
//     } )
}