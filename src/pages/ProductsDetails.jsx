import { shape, string } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class ProductsDetails extends Component {
  state = {
    detail: null,
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductById(id).then((data) => this.setState({
      detail: data,
    }));
  }

  render() {
    const { detail } = this.state;
    return (
      <div>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          carrinho de compras
        </Link>
        <h2>detalhes do produtos</h2>
        {detail
          ? (
            <div>
              <p
                data-testid="product-detail-name"
              >
                {detail.title}
              </p>
              <img
                data-testid="product-detail-image"
                src={ detail.thumbmail }
                alt={ detail.title }
              />
              <p data-testid="product-detail-price">
                {detail.price}
              </p>
              <p>
                {detail.title}
              </p>
              <a
                data-testid="product-detail-link"
                href={ detail.permalink }
              >
                link
              </a>
            </div>
          ) : <> </>}
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  match: shape,
  params: shape,
  id: string,
}.isRequired;