//import logo from './logo.svg';
import './App.css';
import Cart from './Cart/Cart';
import ProductList from './ProductList/ProductList';

const products = [
  {
    name: "Samsung Galaxy A52s",
    price: 388.50,
    description: "Lorem ipsum",
    image: "1621382.jpeg"
  },{
    name: "Samsung Galaxy Z Flip 3",
    price: 1067.96,
    description: "Lorem ipsum",
    image: "1620046.jpeg"
  },{
    name: "Samsung Galaxy Z Fold 3",
    price: 1793.50,
    description: "Lorem ipsum",
    image: "1620065.jpeg"
  },{
    name: "Apple iPhone 13",
    price: 1029.45,
    description: "Lorem ipsum",
    image: "1631109.jpeg"
  },{
    name: "Apple iPhone 13 Pro",
    price: 1279.45,
    description: "Lorem ipsum",
    image: "1630903.jpeg"
  },
]



function App() {
  return (
    <div className="App">

      <div className="flex-item">
        <ProductList products={products}/>
      </div>

      <div className="flex-item">
        <Cart/>
      </div>

    </div>
  );
}

export default App;
