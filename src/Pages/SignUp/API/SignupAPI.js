
import { postAPI } from "../../../Uilities/HttpRequestHandler"


export const postSignUpAPI = (userDetails) => {
    return new Promise ((resolve,reject) => {
        postAPI("https://gorest.co.in/public/v2/users", userDetails)
        .then((response) => {
            console.log("response",response)
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    } )
}