
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs/.index';
import Cart from 'pages/Cart';
import Catalog from 'pages/Catalog';
import Cotegory from 'pages/Cotegory';
import Delivery from 'pages/Delivery';
import Discount from 'pages/Discount';
import Order from 'pages/Order';
import Product from 'pages/Product';
import Favourite from "pages/Favourite";
import PageNotFound from 'pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/category/:type'element={<Cotegory/>}/>
      <Route path='/delivery'element={<Delivery/>}/>
      <Route path='/discount'element={<Discount/>}/>
      <Route path='/order'element={<Order/>}/>
      <Route path='/product'element={<Product/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
      <Route path='/*'element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
