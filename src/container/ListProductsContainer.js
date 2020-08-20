import React, { Component } from 'react';
import {connect} from 'react-redux'
import ListProducts from '../components/ListProducts'
import PropTypes from 'prop-types';


class ListProductsContainer extends Component {
    render() {
        let {list_product} = this.props
        return (
            <div>
                <ListProducts list_product = {list_product}/>
            </div>
        );
    }
}

ListProductsContainer.objectOf  ={
    list_product : PropTypes.arrayOf({
        id : PropTypes.string.isRequired,
        img : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        rating :PropTypes.number.isRequired,
        price : PropTypes.number.isRequired
    }).isRequired
}

let mapStateToProps = state =>{
    return {
        list_product : state.list_product
    }
}
export default connect(mapStateToProps,null)(ListProductsContainer);