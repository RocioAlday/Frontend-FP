import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './orderStatus.css';
import { getUserOrders, FilterUserOrdersByStatus, userInfoData } from "../../actions/userActions";
import OrderMap from "./OrderMap";


const OrderStatus= ()=> {
  let history= useNavigate();
  const userOrders= useSelector((state)=> state.userOrdersOpen);
  const filtered= useSelector((state)=> state.filteredOrdersByStatus);
  const dataLogin= useSelector((state)=> state.userLogin);
  let userData= useSelector((state)=> state.userData);
  const dispatch= useDispatch();
  const [checked, setChecked] = useState({
    confirmed: false,
    printed: false,
    delivered: false,
    billed: false
  });
  
  useEffect(()=> {
    dispatch(getUserOrders());
    dataLogin.hasOwnProperty('email') ? null : dispatch(userInfoData()) 
  }, [dispatch])


  function handleCheck(e) {
    console.log(e.target.checked);
    console.log(e.target.id);
    console.log(!checked[e.target.id])
    setChecked({
      ...checked,
      [e.target.id]: e.target.checked
    });
    dispatch(FilterUserOrdersByStatus({...checked, [e.target.id]: e.target.checked}))
  }


    return (
      userOrders.length && (userData.hasOwnProperty('email') || dataLogin.hasOwnProperty('email') ) ? 
      <div className="flex flex-col items-center py-36 bg-customBlue">
        <p className="px-12 pb-1 mb-10 font-semibold text-gray-300 font">ESTADO DE SUS PEDIDOS</p>
        <div className="sm:flex-row flex items-center gap-4 pb-6 text-gray-300">
        <div className=" flex items-center gap-2">
            <input className="rounded-sm"
                type="checkbox"
                id= 'confirmed'
                checked= {checked.confirmed}
                onChange={(e)=> handleCheck(e)}
            > 
            </input> 
            <span>Confirmados</span>
          </div>
          <div className=" flex items-center gap-2">
            <input className="rounded-sm"
                type="checkbox"
                id= 'printed'
                checked= {checked.printed}
                onChange={(e)=> handleCheck(e)}
            > 
            </input> 
            <span>Impresión Lista</span>
          </div>
          <div className=" flex items-center gap-2">
            <input className="rounded-sm"
                type="checkbox"
                id= 'delivered'
                name='billed'
                checked= {checked.delivered}
                onChange={(e)=> handleCheck(e)}
            > 
            </input> 
            <span>Entregados</span>
          </div>
          <div className=" flex items-center gap-2">
            <input className="rounded-sm"
                type="checkbox"
                id= 'billed'
                checked= {checked.billed}
                onChange={(e)=> handleCheck(e)}
            > 
            </input> 
            <span>Facturados</span>
          </div>
        </div>
      
      { filtered.length ? filtered.map(order=> {
         return (
          <div className="w-3/6">
          <OrderMap key={order.orderId} props={{order: order, detailModels: order.detailModels}} />
          </div>
         )
        }) 
         :
        userOrders.map(order => {
          return (
            <div className="w-3/6">
          <OrderMap key={order.orderId} props={{order: order, detailModels: order.detailModels}} />
          </div>
          )
        })
      }

      </div>

   : userData.hasOwnProperty('email') == false && dataLogin.hasOwnProperty('email') == false ? history('/login')
   : <h1 className="py-36 text-center">NO TIENE PEDIDOS PENDIENTES O EN CURSO</h1>
     
      
     
    )
};

export default OrderStatus;
