import { getAPI } from "../../../Uilities/HttpRequestHandler"

export const getSignInAPI = async (userId) => {

    const response = await getAPI(`https://gorest.co.in/public/v2/users/${userId}`)
    if (response){
        return response
    } else {
        return response
    }
}