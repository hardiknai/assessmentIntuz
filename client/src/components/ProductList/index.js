import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product";
import "./index.css";

export default class ProductList extends Component {
  componentWillMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props;
    return products.loading ? (
      "Loading..."
    ) : (
      <div class="wrapper">
        {products.error && <spen class="error">{products.error}</spen>}
        <div class="flex-container">
          {products.products &&
            products.products.map((product) => (
              <Product {...product} key={product._id} />
            ))}
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.object,
};
