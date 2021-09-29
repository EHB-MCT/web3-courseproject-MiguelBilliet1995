import './App.css';

import Filter from './Filter/Filter';
import ProductList from './ProductList/ProductList';
import Banner from './Banner/Banner';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
library.add(faShoppingCart, faTrash);
class App extends React.Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.ajustFilterCheckbox = this.ajustFilterCheckbox.bind(this);

    // Dummy data

    this.state = {
      products: [
        {
          name: "Samsung Galaxy A52s",
          brand: "Samsung",
          price: 388.50,
          description: "Lorem ipsum",
          image: "1621382.jpeg"
        },{
          name: "Samsung Galaxy Z Flip 3",
          brand: "Samsung",
          price: 1067.96,
          description: "Lorem ipsum",
          image: "1620046.jpeg"
        },{
          name: "Samsung Galaxy Z Fold 3",
          brand: "Samsung",
          price: 1793.50,
          description: "Lorem ipsum",
          image: "1620065.jpeg"
        },{
          name: "Apple iPhone 13",
          brand: "Apple",
          price: 1029.45,
          description: "Lorem ipsum",
          image: "1631109.jpeg"
        },{
          name: "Apple iPhone 13 Pro",
          brand: "Apple",
          price: 1279.45,
          description: "Lorem ipsum",
          image: "1630903.jpeg"
        },{
          name: "OnePlus Nord",
          brand: "OnePlus",
          price: 362.96,
          description: "Lorem ipsum",
          image: "1582883.jpeg"
        },{
          name: "OnePlus 9",
          brand: "OnePlus",
          price: 599.00,
          description: "Lorem ipsum",
          image: "1556449.jpeg"
        },{
          name: "Motorola Moto G30",
          brand: "Motorola",
          price: 149.00,
          description: "Lorem ipsum",
          image: "1542395.jpeg"
        },
      ],
      cart: [],
      filter: []
    };

  }

  // winkelwagen

  addToCart(product) {
    let newCart = this.state.cart;
    newCart.push(product);
    this.setState({cart: newCart});
  }

  removeFromCart(product) {
    let newCart = this.state.cart;
    // later veranderen naar id ipv name
    const index = newCart.findIndex(key => key.name === product.name);
    newCart.splice(index,1);
    this.setState({cart: newCart});
  }

  // filter

  ajustFilterCheckbox(type, value, checked){
    console.log(type, value, checked);
    let newFilter = this.state.filter;
    if(this.state.filter.filter(e => e.value == value).length > 0){
      console.log("bestaat");
      // filter verwijderen
      const index = newFilter.findIndex(key => key.value === value);
      newFilter.splice(index,1);
    }else{
      // filter toevoegen
      newFilter.push({
        type: type,
        value: value,
        checked: checked
      });
    }
    this.setState({filter: newFilter});
  }


  render() {
    return (
      <div className="App">
        <Banner products={this.state.cart} removeFromCart={this.removeFromCart}/>
        <div className="container">
          <div className="flex content">
            <div className="flex-item">
              <Filter products={this.state.products} ajustFilterCheckbox={this.ajustFilterCheckbox} />
            </div>
            <div className="flex-item">
              <ProductList products={this.state.products} filter={this.state.filter} addToCart={this.addToCart} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
