import React from 'react';
import './assets/main.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import DetailsProducts from './components/pages/DetailsProducts';
import Cart from './components/pages/Cart';
import { CartProvider } from 'react-use-cart';
import Footer from './components/footer/Footer';
import AddProduct from './components/pages/AddProduct';
import BotonSubir from './components/BotonSubir';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path="/productos" element={<ProductsPage />} />
                        <Route path="/carrito" element={<Cart />} />
                        <Route path="/productos/:id" element={<DetailsProducts />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/vender" element={<AddProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <BotonSubir />
            <Footer />
        </CartProvider>
    );
}

export default App;
