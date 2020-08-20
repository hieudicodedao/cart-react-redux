import * as types from '../variables/const_var'

let count = localStorage.getItem('count');
let initialState = count ? count : 0;

let myreducer = (state = initialState,action) =>{
    switch(action.type){
        case types.COUNT_TOTAL_PRICE:
            let  sum =0;
            let listCheckOut = action.listCheckOut // include product and quality
            for(let i=0;i<action.listCheckOut.length;++i){
                sum += listCheckOut[i].product.price * listCheckOut[i].quality
            }
            state = sum
            localStorage.setItem('count',state );
            return state
        default  : 
            return state
    }
}

export default myreducer