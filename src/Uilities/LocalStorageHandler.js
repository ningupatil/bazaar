
export const saveInLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value)
}
 
export const saveObjectInLocalStorage = (key, item) => {
    
    
    window.localStorage.setItem(key, JSON.stringify(item))
}

export const getFromLocalStorage= () => {
    window.localStorage.getItem("name")
    window.localStorage.getItem("Last")
}

export const getObjectFromLocalStorage = () => {
    window.localStorage.getItem("object")
}