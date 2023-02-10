import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import productService from './services/productService';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    this.getProducts();
  }

  getProducts = async () => {
    const products = await productService.getAll();
    this.setState({products: products});
  }

  renderProduct = product => {
    console.log(product);
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  render() {
    return (
      <div className="App">
      <ul className="list">
        {(this.state.products && this.state.products.length > 0) ? (
          this.state.products.map(product => this.renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
    );
  }
}

export default App;
