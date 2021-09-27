import React from "react";
import './Cart.css';

function CartItem(props){
  return (
    <div className="cartItem">
      <span className="itemName">{props.item.name}</span>
      <span className="itemPrice">€ {props.item.price.toFixed(2)}</span>
    </div>
  )
}

class Cart extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cart: [
        {
          name: "Item 1",
          price: 2.50
        },
        {
          name: "Item 2",
          price: 3.00
        }
      ]
    };

    this.totalPrice = 0;
    this.cartItems = this.state.cart.map((item) => {
      this.totalPrice += item.price;
      return <CartItem item={item} />
    });


  }


  render(){
    return (
      <div className="cartContainer">
        <h3>Cart</h3>
        <div className="cartListContainer">
          {this.cartItems}
        </div>
        <div className="cartBottom">
          <b>Total:</b> € {this.totalPrice.toFixed(2)}
        </div>
      </div>
    )
  }

}


export default Cart;