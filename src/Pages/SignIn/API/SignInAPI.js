import { getAPI } from "../../../Uilities/HttpRequestHandler"

export const getSignInAPI = (userId) => {
    return new Promise ((resolve, reject) => {
        getAPI(`https://gorest.co.in/public/v2/users/${userId}`)
        .then((response) => {
            console.log("---response--",response)
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}