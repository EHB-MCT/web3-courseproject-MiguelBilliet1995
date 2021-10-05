import React from "react";
import './Banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Cart from '../Cart/Cart';

class Banner extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cart: false
    }

    this.toggleCart = this.toggleCart.bind(this);
  }

  toggleCart(){
    this.setState({
      cart: !this.state.cart
    })
  }

  render(){

    let totalProducts = this.props.products.length;

    return (
      <div className="banner">
        <div className="mainBanner">
          <div className="container flex flex-center">
            <div className="flex-item">
              <span className="logo">Coolgreen</span>
            </div>
            <div className="flex-item">
              <div className="menu">
                <div className={this.state.cart ? "icon active" : "icon"} onClick={this.toggleCart}>
                  <FontAwesomeIcon icon="shopping-cart" className="menuIcon" />
                  <span className={totalProducts > 0 ? "iconNotification" : "displayNone"}>{totalProducts}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.cart ? "container" : "container displayNone"}>
          <Cart products={this.props.products} removeFromCart={this.props.removeFromCart} />
        </div>
      </div>
    )
  }
}

export default Banner;