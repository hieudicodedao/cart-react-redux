import React, { Component } from 'react'
import Product from '../container/ProductContainer'
class ListProducts extends Component {
    render() {
        let {list_product}  =this.props
        let listProducts = list_product.map((value,index)=>{
            return <Product product = {value} key = {index}/>
        })
        return ( 
            <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                            {listProducts} 
                    </div>
            </section>
        );
    }
}
export default ListProducts;