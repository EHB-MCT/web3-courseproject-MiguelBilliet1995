import React from "react";
import './ProductList.css'


class ProductListItem extends React.Component {

  constructor(props){
    super(props);

    this.handleAddToCart = this.addToCart.bind(this);
  }

  addToCart() {
    console.log(this.props.productId);
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
        <button onClick={this.handleAddToCart}>Koop</button>
      </div>
    </div>);
  }

}

class ProductList extends React.Component {

  constructor(props){
    super(props);

    this.list = this.props.products.map((item, index) => {
      return <ProductListItem item={item} productId={index} key={index} />
    });
  }

  render(){
    return (
      <div>
        {this.list}
      </div>
    );
  }

}

export default ProductList;