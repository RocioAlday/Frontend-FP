import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/SignUp/Register';
import Pedidos from './pages/Pedidos/Pedidos';
import Logout from './components/Logout/Logout';
import Order from './components/Order-Detail/Order';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path= "/" element= {<Layout />} >
         <Route path='/home' element= {<Home />} />
         <Route path='/login' element= {<Login />} />
         <Route path='/logout' element= {<Logout />} />
         <Route path='/register' element= {<Register />} />
         <Route path='/pedidos' element= {<Pedidos />} />
         <Route path= '/orderDetail' element= {<Order />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
