import * as types from '../variables/const_var'

export const on_add_to_cart = (product,quality) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        quality
    }
}

export const count_total_price = (listCheckOut) =>{
    return {
        type: types.COUNT_TOTAL_PRICE,
        listCheckOut
    }
}

export const increse_quality = (product) =>{
    return {
        type : types.INCRESE_QUALITY,
        product
    }
}
export const decrese_quality = (product) =>{
    return {
        type : types.DECRESE_QUALITY,
        product
    }
}

export const remove_item = (product) =>{
    return {
        type : types.REMOVE_ITEM,
        product
    }
}