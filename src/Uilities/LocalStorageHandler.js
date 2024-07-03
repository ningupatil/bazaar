
export const saveInLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value)
}
 
export const saveObjectInLocalStorage = (object) => {
    window.localStorage.setItem('object',JSON.stringify(object))
}

export const getFromLocalStorage= () => {
    window.localStorage.getItem("name")
    window.localStorage.getItem("Last")
}
