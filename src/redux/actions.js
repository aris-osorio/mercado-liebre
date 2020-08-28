export const addCart =(id)=>({
    type: "ADD_PRODUCT",
    payload: id
})

export const deleteCart =(id)=>({
    type: "DELETE_PRODUCT",
    payload: id
})

export const showCart=(show)=>({
    type: "SHOW_CART",
    payload: show
})