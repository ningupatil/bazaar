import axios from "axios"

const config = {
    headers: { Authorization: `Bearer 12e4f859c0ed77886502bc0e5a8db92b0348ceafe30e5e5e82a1aab548337f09` }
};

export const getAPI = async (path) => {
    try {
    const response = await  axios.get(path, config)
    console.log("error",response)
    return response;
    }
    catch(error) {
        console.log("error",error)
    }
}
// getAPI().catch((error) => console.log(error))

export const postAPI = async (path, apiInput) => {
    console.log('Fun: apiInput ', apiInput);
    const response = await axios.post(path, apiInput, config)
    console.log('Fun: response ', response);
    return response;
}
// postAPI().catch((error) => console.log(error))
