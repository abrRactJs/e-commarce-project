import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from "./Component/Header/Header"
import Shop from './Component/Shop/Shop';
import Cart from './Component/Cart/Cart';
import { createContext } from 'react';
import SuccessOrder from './Component/SuccessOrder/SuccessOrder';
import Error from './Component/Error/Error';
import Details from './Component/Details/Details';
import FooterContact from './Component/FooterContact/FooterContact';
import Newslater from './Component/Newslater/Newslater'
import Blog from './Component/BlogPage/Blog';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Login from './Component/LoginPage/Login';
import Shipment from './Component/Shipment/Shipment';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';


export const cartContext = createContext();
export const loggdInContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <cartContext.Provider value={[cart, setCart]}>
      <loggdInContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/successOrder' element={<SuccessOrder />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/shipment'
              element={<PrivetRoute>
                <Shipment></Shipment>
              </PrivetRoute>}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/details/:id' element={<Details />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>

        <Newslater></Newslater>
        <FooterContact></FooterContact>
      </loggdInContext.Provider>
    </cartContext.Provider>
  );
};

export default App;