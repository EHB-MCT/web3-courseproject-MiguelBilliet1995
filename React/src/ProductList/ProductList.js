import React from "react";
import './ProductList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProductListItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (<div className="productItem">
      <div className="productPicture">
        <span className="helper" />
        <img src={`/images/products/${this.props.item.image}`} alt="" />
      </div>
      <div className="productDetail">
        <span className="productName">{this.props.item.name}</span>
        <span className="productDescription">{this.props.item.description}</span>
        <span className="productPrice">€ {this.props.item.price.toFixed(2)}</span>
      </div>
      <div className="productAction">
        <button onClick={() => this.props.addToCart(this.props.item)}><FontAwesomeIcon icon="shopping-cart" /></button>
      </div>
    </div>);
  }

}

class ProductList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    this.list = this.props.products.map((item, index) => {
      // filter
      if(this.props.filter.length > 0){
        return this.props.filter.map((filter) => {
          switch(filter.type){
            case "brand":
              console.log("brand filter");
              if(item.brand == filter.value){
                console.log("match!")
                return <ProductListItem item={item} productId={index} key={index} addToCart={this.props.addToCart} />
              }
              break;
          }
        });
      }else{
        return <ProductListItem item={item} productId={index} key={index} addToCart={this.props.addToCart} />
      }
    });

    return (
      <div>
        <h3>{this.list.length} producten</h3>
        {this.list}
      </div>
    );
  }

}

export default ProductList;