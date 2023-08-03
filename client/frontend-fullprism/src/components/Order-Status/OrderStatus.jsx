import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './orderStatus.css';
import { getUserOrders, FilterUserOrdersByStatus } from "../../actions/userActions";
import OrderMap from "./OrderMap";


const OrderStatus= ()=> {
  const userOrders= useSelector((state)=> state.userOrdersOpen);
  const filtered= useSelector((state)=> state.filteredOrdersByStatus);
  const dispatch= useDispatch();
  const [checked, setChecked] = useState({
    printed: false,
    delivered: false,
    billed: false
  });
  
  useEffect(()=> {
    dispatch(getUserOrders());
  }, [])


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
      userOrders.length ? 
      <div className="flex flex-col items-center">
        <p className="px-12 py-10 pb-1 mb-10 font-semibold">ESTADO DE SUS PEDIDOS</p>
        <div className="sm:flex-row flex items-center gap-4 pb-6">
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
          <OrderMap key={order.orderId} props={{order: order, detailModels: order.detailModels}} />
         )
        }) :
        userOrders.map(order => {
          return (
          <OrderMap key={order.orderId} props={{order: order, detailModels: order.detailModels}} />
          )
        })
      }

      </div>
   : 'NO TIENE PEDIDOS PENDIENTES O EN CURSO'
     
      
     
    )
};

export default OrderStatus;
