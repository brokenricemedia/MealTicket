import React, { Component } from 'react';
import Cart from '../../containers/cart';
import ProductList from '../../containers/ProductList';

class ProductPage extends Component {
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
};

export default ProductPage;