import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login/Login';
import Register from './pages/SignUp/Register';
import Pedidos from './pages/Pedidos/Pedidos';
import Logout from './components/Logout/Logout';
import Order from './components/Order-Detail/Order';
import EditModels from './pages/Dashboard-Admin/EditModels';
import OrderForFact from './components/OrdersForFact/OrderForFac';
import OrderStatus from './components/Order-Status/OrderStatus';
import ProductionDash from './pages/Dashboard-Admin/ProductionDash';
import AdminDash from './pages/Dashboard-Admin/AdminDash';
import Presupuesto from './components/Presupuesto/Presupuesto';
import Dashboards from './pages/Dashboard-Admin/Dashboards';
import SideMenu from './pages/Dashboard-Admin/SideMenu/SideMenu';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
        <Route path= "/" element= {<Layout />} >
         <Route index element= {<Login />} />
         <Route path= '/login' element= {<Login />} />
         <Route path='/logout' element= {<Logout />} />
         <Route path='/register' element= {<Register />} />
         <Route path='/piezas' element= {<Pedidos />} />
         <Route path= '/orderDetail' element= {<Order />} />
         <Route path= '/productionDash' element= {<ProductionDash />} />
         <Route path= '/editModels' element= {<EditModels />} />
         <Route path='/ordersForBilling' element= {<OrderForFact />} />
         <Route path= '/orderStatus' element= {<OrderStatus/>} />
         <Route path= '/adminDash' element= {<AdminDash/>} />
         <Route path= '/presupuesto' element= {<Presupuesto />} />
         <Route path= '/dashboards' element= {<SideMenu />} />
         <Route path= '/contacto' element= {<Contact />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
