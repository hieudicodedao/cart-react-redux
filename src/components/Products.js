import React, { Component } from 'react';

class Products extends Component {
    handleClick = (e) =>{
        e.preventDefault()
        this.props.on_add_to_cart(this.props.product,1) 
        this.props.count_total_price(this.props.listCheckOut)
    }
    render() {
        let {product } = this.props 
        let renderx = () => {
            let rs =[];
            let index =1;
            for(let i=1 ; i <= product.rating ; ++i){
                rs.push( <i key = {index} className="fa fa-star"></i>)
                index++;
            }
            for(let i=1 ; i <= 5- product.rating ; ++i){
                rs.push(<i key = {index} className="fa fa-star-o"></i>)
                index++;
            }
            return rs;
        }
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src= {product.img}
                            className="img-fluid" alt="" />
                        <a href = "!#">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href = "!#">{product.name}</a>
                            </strong>
                        </h4>


                        <ul className="rating">
                            <li>
                                {renderx()}
                            </li>
                        </ul>

                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href = "!#" className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    title="" 
                                    onClick = {this.handleClick}
                                    data-original-title="Add to Cart">
                                        <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        );
        
    }
}

export default Products;