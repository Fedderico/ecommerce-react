import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CatalogoProductos from './components/CatalogoProductos';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: nextId }]);
    setNextId(nextId + 1);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


function Inicio() {
  return (
    <div className="container">
      <h1>Bienvenido a Nuestra Tienda</h1>
      <p>Compra los mejores productos aquí.</p>
      <CatalogoProductos />
    </div>
  );
}


export default App;
