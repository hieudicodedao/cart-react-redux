import * as types from '../variables/const_var'
let data = JSON.parse(localStorage.getItem('listcheckout'));
let initialState = data ? data : []
let myreducer  = (state = initialState ,action) =>{
    switch(action.type){
        case types.ADD_TO_CART:
            let findIndex = -1;
            //find the product is showup on cart before?
            for(let i=0 ;i < state.length ;++i){
                if(state[i].product.id === action.product.id){
                    findIndex = i;
                    break;
                }
            }
            //then if find increse quality and return new state
            if(findIndex !== -1){
                let newstate = state;
                newstate[findIndex].quality += 1;
                state = newstate
            }else{ // if cant fint then create new product add to cart
                let newstate = state
                let newProduct = {
                    product : action.product,
                    quality : 1
                }
                newstate.push(newProduct);
                state = newstate
            }
            localStorage.setItem('listcheckout',JSON.stringify(state));
            return [...state];

        case types.INCRESE_QUALITY:
            let product = action.product
            let newstate = state
            let index = -1;
            for(let i=0;i<newstate.length;++i){
                if(product === newstate[i].product){
                    index = i;
                    break;
                }
            }
            let newele = {
                product : product,
                quality : newstate[index].quality +1
            }
            state[index] = newele
            localStorage.setItem('listcheckout',JSON.stringify(state)); 
            return  [...state]

        case types.DECRESE_QUALITY:
            let  _product = action.product
            let  _newstate = state
            let _index = -1;
            for(let i=0;i<_newstate.length;++i){
                if(_product === _newstate[i].product){
                    _index = i;
                    break;
                }
            }
            if(_newstate[_index].quality -1 === 0){
                _newstate.splice(_index,1)
                state = _newstate
            }
            else{
                let _newele = {
                    product : _product,
                    quality : _newstate[_index].quality -1
                }
                state[_index] = _newele
            }   
            localStorage.setItem('listcheckout',JSON.stringify(state)); 
            return  [...state]

        case types.REMOVE_ITEM:
            let  myproduct = action.product
            let  mystate = state
            let myindex = -1;
            for(let i=0;i<mystate.length;++i){
                if(myproduct === mystate[i].product){
                    myindex = i;
                    break;
                }
            }
           
            mystate.splice(myindex,1)
            state = mystate
            localStorage.setItem('listcheckout',JSON.stringify(state)); 
            return [...state]
        default : return [...state]
    }
}

export default myreducer