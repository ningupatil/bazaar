import axios from "axios"
import { Await } from "react-router-dom";

const config = {
    headers: { Authorization: `Bearer ` }
};
export const getAPI =(path) => {
    return new Promise ( (resolve,reject) => {
        axios.get(path, config)
        .then( (response) => {
            resolve(response.data)
        })
        .catch( (error) => {
            console.log('Fun: getAPI error ', error);
            reject(error)
        })
    })
}

export const postAPI =(path, apiInput) => {
    return new Promise ( (resolve,reject) => {
        axios.post(path, apiInput, config)
        .then( (response) => {
            resolve(response.data)
        })
        .catch( (error) => {
            console.log('Fun: postAPI error ', error);
            reject(error)
        })
    })
}

// export const postLoginAPI =(path, apiInput) => {
//     return new Promise ((resolve, reject) => {
//         axios.post(path,apiInput)
//         .then((response) => {
//             resolve(response)
//         })
//         .catch((error) => {
//             reject(error)
//         })
//     })
// }