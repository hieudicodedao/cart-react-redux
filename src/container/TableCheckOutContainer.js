import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableCheckOut from '../components/TableCheckOut'
// import PropTypes from 'prop-types';
import * as actions from '../actions/index'

class TableCheckOutContainer extends Component {
    render() {
        let {listCheckOut,purchase }  = this.props
        return (
            <div>
                <TableCheckOut listCheckOut = {listCheckOut}
                                purchase = {purchase}
                />
            </div>
        );
    }
}

let mapStateToProps = state =>{
    return {
        listCheckOut : state.listCheckOut,
        purchase : state.purchase
    }
}
let mapDispatchToState = (dispatch,props) =>{
    return{
        increse_quality : (product) =>{
            dispatch(actions.increse_quality(product))
            console.log('im here')
        }
    }
}
export default connect(mapStateToProps,mapDispatchToState)(TableCheckOutContainer);