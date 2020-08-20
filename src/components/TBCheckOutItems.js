import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
class TBCheckOutItems extends Component {
    handleClick = (e) =>{
        e.preventDefault();
        this.props.increse_quality(this.props.ele.product);
        this.props.count_total_price(this.props.listCheckOut);
    }
    handleClickd = (e) =>{
        e.preventDefault();
        this.props.decrese_quality(this.props.ele.product);
        this.props.count_total_price(this.props.listCheckOut);
    }
    handleRemove = (e) =>{
        e.preventDefault();
        this.props.remove_item(this.props.ele.product);
        this.props.count_total_price(this.props.listCheckOut);
    }
    render() {
        let {ele} = this.props
        let product = ele.product
        let quality = ele.quality
        return (
            
            <tr >
                <th scope="row">
                    <img src= {product.img}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                    <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {quality} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {this.handleClickd}
                            >
                            <a href = "!#">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {this.handleClick}>
                                
                            <a href = "!#" >+</a>
                        </label>
                    </div>
                </td>
                    <td>{product.price * quality}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick= {this.handleRemove}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}
let mapStateToProps  = state =>{
    return {
        listCheckOut: state.listCheckOut
    }
} 
let mapDispatchToState = (dispatch,props) =>{
    return{
        increse_quality : (product) =>{
            dispatch(actions.increse_quality(product))
        },
        decrese_quality : (product) =>{
            dispatch(actions.decrese_quality(product))
        },
        remove_item : (product) =>{
            dispatch(actions.remove_item(product))
        },
        count_total_price : (listCheckOut) =>{
            dispatch(actions.count_total_price(listCheckOut))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToState)(TBCheckOutItems);