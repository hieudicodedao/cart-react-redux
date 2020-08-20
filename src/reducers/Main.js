import {combineReducers} from 'redux'
import list_product from './show_list_products'
import listCheckOut from './listCheckOut'
import content from './messageContent'
import purchase from './purchase'

export default combineReducers({
    list_product ,
    listCheckOut,
    content,
    purchase
})