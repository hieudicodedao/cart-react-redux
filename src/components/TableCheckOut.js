import React, { Component } from 'react';
import ItemCheckOut from './TBCheckOutItems'
import Purchase from './Purchase'
class TableCheckOut extends Component {
    render() {
        let {listCheckOut,purchase} = this.props
        let itemcheckout = listCheckOut.map((ele,index)=>{
            return <ItemCheckOut ele = {ele} 
                            key = {index}
                    />
        })
        
        return (
            <section className="section">
                <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemcheckout}
                                {/* <ItemCheckOut /> */}
                                <Purchase purchase  =  {purchase}/>
                            </tbody>
                        </table>
                    </div>
                </section>
        );
    }
}

export default TableCheckOut;