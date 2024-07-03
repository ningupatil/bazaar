import { postAPI } from "../../../Uilities/HttpRequestHandler"


export const postLoginAPI = (userDetails) => {
    return new Promise ((resolve, reject) => {
        postAPI("https://gorest.co.in/public/v2/users",userDetails)
        .then((response) => {
            
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}