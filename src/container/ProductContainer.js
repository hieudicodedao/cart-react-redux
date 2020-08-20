import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Product from '../components/Products'
class ProductContainer extends Component {
   
    render() {
        let {product,listCheckOut} = this.props;
        return (
                <Product on_add_to_cart = {this.props.onAddToCart}
                        count_total_price = {this.props.count_total_price}
                        product = {product}  
                        listCheckOut = {listCheckOut}  
                />
           
        );
    }
}
let mapStateToProp = state =>{
    return {
        listCheckOut : state.listCheckOut
    }
}
let mapDispatchToState = (dispatch,props) =>{
    return {
        onAddToCart : (product,quality) =>{
            dispatch(actions.on_add_to_cart(product,quality))
        },
        count_total_price : (listCheckOut) =>{
            dispatch(actions.count_total_price(listCheckOut))
        }
    }
}
export default connect(mapStateToProp,mapDispatchToState)(ProductContainer);