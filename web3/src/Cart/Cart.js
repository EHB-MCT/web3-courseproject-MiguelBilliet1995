import React from "react";
import './Cart.css';


class CartItem extends React.Component {

  constructor(props){
    super(props);
    this.handleDeleteFromCart = this.deleteFromCart.bind(this);
  }

  deleteFromCart(){
    console.log("ok");
  }

  render(){
    return (
      <div className="cartItem">
        <div className="cartItemDetail">
          <span className="itemName">{this.props.item.name}</span>
          <span className="itemPrice">€ {this.props.item.price.toFixed(2)}</span>
        </div>
        <div className="cartItemAction">
          <button onClick={this.handleDeleteFromCart}>Verwijder</button>
        </div>
      </div>
    );
  }

}
class Cart extends React.Component {

  constructor(props){
    super(props);

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
    this.cartItems = this.state.cart.map((item, index) => {
      this.totalPrice += item.price;
      return <CartItem item={item} key={index} />
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