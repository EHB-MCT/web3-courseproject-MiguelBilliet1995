import React from "react";
import './Filter.css';

class Filter extends React.Component {

  constructor(props){
    super(props);

    this.brandArray = [];

    // merk filter
    this.brandSet = new Set();
    props.products.map((item) => {
      this.brandSet.add(item.brand);
    });

    this.brandSet.forEach((brand) => {
      this.brandArray.push(brand);
    });

  }

  render() {
    return (
      <div className="filter">
        <h3>Merk</h3>
        {
          this.brandArray.map((brand, index) => {
            return (
              <div className="filterOption" key={index}>
                <input type="checkbox" id={index} value={brand} onChange={(e) => this.props.ajustFilterCheckbox("brand", e.target.value, e.target.checked)}/>
                <label for={index} >{brand}</label>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default Filter;