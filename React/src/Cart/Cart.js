import React from "react";
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CartItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="cartItem">
        <div className="cartItemDetail">
          <span className="itemName">{this.props.item.name}</span>
          <span className="itemPrice">€ {this.props.item.price.toFixed(2)}</span>
        </div>
        <div className="cartItemAction">
          <button onClick={() => this.props.removeFromCart(this.props.item)}><FontAwesomeIcon icon="trash" /></button>
        </div>
      </div>
    );
  }

}
class Cart extends React.Component {

  constructor(props){
    super(props);
    this.totalPrice = 0;
  }


  render(){
    this.totalPrice = 0;
    return (
      <div className="cartContainer">
        <h3>Winkelwagen</h3>
        <div className="cartListContainer">
          {
            this.cartItems = this.props.products.map((item, index) => {
              this.totalPrice += item.price;
              return <CartItem item={item} key={index} removeFromCart={this.props.removeFromCart} />
            })
          }
        </div>
        <div className="cartBottom">
          <span><b>Total:</b> € {this.totalPrice.toFixed(2)}</span>
          <button>Betalen</button>
        </div>
      </div>
    )
  }

}


export default Cart;