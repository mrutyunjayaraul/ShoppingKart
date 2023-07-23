import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MyCart from './components/MyCart';
import {useState} from 'react';


function App() {

  const [product,setProduct]=useState([
{
  url:'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70',
  Name:'Square Case Series Digital Watch',
  category:'Smartwatch',
  seller:'BRANDDEALZ',
  price:160
},
{
  url:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/g/k/-original-imageyuud3bey9hh.jpeg?q=70',
  Name:'REDMI 10 Power',
  category:'Smartphone',
  seller:'ShreeeMobiles',
  price:15000
},
{
  url:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70',
  Name:'SAMSUNG Galaxy S23 Ultra 5G',
  category:'Smartphone',
  seller:'MYTHANGLORYRetail',
  price:24999,
},
{
  url:'https://rukminim2.flixcart.com/image/832/832/kl6wx3k0/t-shirt/y/n/i/s-bbt-try-this-original-imagydarhsryeahn.jpeg?q=70',
  Name:'Black T-Shirt',
  category:'T-Shirt',
  seller:'MJ INDUSTRIES',
  price:200
},
{
  url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/i/6/6-jimny-white-6-sfr-white-original-imagnp4zhejww3uf.jpeg?q=70',
  Name:'Sneakers For Men ',
  category:'Sneakers',
  seller:'SFRPL',
  price:348
},
{
  url:'https://rukminim2.flixcart.com/image/832/832/kqpj4i80/kurta/j/h/8/xl-ku632lgn-mokshi-original-imag4nmvvfny6vyf.jpeg?q=70',
  Name:'Women Printed Viscose Rayon A-line Kurta',
  category:'Kurtis',
  seller:'MOKSHI',
  price:290
}
  ])
 const [cart,setCart]=useState([])
 const [showCart,setshowCart]=useState(false)
console.log(cart)
 const addToCart=(data)=>{
 setCart([...cart,{ ...data,quantity:1}])
 }

 const handleShow=(value)=>{
  setshowCart(value)
 }
  return (
    <div>
    <Header count={cart.length}
     handleShow={handleShow}></Header>
      {
        showCart ?
      <MyCart cart={cart}></MyCart>:
      <ProductList product={product} addToCart={addToCart}></ProductList>
      }

    </div>
  );
}

export default App;
