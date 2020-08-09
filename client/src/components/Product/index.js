import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const {
      _id,
      name,
      price,
      currency,
      image,
      addToCart,
      removeFromCart,
      isInCart,
    } = this.props;
    if (isInCart) {
      removeFromCart(_id);
    } else {
      addToCart({ _id, name, price, currency, image });
    }
  }

  render() {
    const { _id, name, price, description, image } = this.props;
    return (
      <div class="item">
        <div class="card">
          <div class="card__img">
            <img
              class="card__img__content"
              src={image}
            />
          </div>
          <div class="card__description">
            <p class="card__description__name">{name}</p>
            <p class="card__description__location">{description}</p>
            <p class="card__description__value">$ {price}</p>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  currency: PropTypes.string,
  image: PropTypes.string,
};

export default Product;
