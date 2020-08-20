import * as msg from '../variables/message_to_user'
import * as types from '../variables/const_var'
let initialState  = msg.MSG_WELCOME;

let myreducer = (state = initialState,action) =>{
    switch(action.type){
        case types.ADD_TO_CART:
            state = msg.MSG_ADD_TO_CART
            return state
        case types.REMOVE_ITEM:
            state = msg.MSG_DELETE
            return state
        case types.INCRESE_QUALITY:
            state = msg.MSG_ADD_TO_CART
            return state
        default : 
            return state
    }
}
export default myreducer    