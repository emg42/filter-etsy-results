import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const {products} = this.props;

        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property


        return (
            <ul className="ProductList" >
              {products.map((productInfo) => {
                return(
                <Product
                key={products.listing_id}
                {...productInfo}
                />
              )
            })}
            </ul>
          )

    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    // let products;
    console.log(state);
    // complete the `if else` statement including conditions and `products` value
return {products: state.products}
}

export default connect(mapStateToProps)(ProductList);
