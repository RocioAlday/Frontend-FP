
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemOrder, changeStatus, addToOrderConfirmed, deleteOrder, getDolarValue } from "../../actions/userActions";
import { formateNumber } from '../../utils/functions';
import OrderDetail from "./OrderDetail";
import {GiConfirmed} from "react-icons/gi";
import './order.css';

const Order= ()=> {

    const dispatch= useDispatch();
    let order= useSelector((state)=> state.userOrder); 
    let cartUser= useSelector((state)=> state.modelsInCart);
    let error= useSelector((state)=> state.error);
    let history= useNavigate();
    let dolarValue= useSelector((state)=> state.dolarValue.valor);

 console.log( 'ORDER' , order);

    useEffect(() => {
        dispatch(deleteItemOrder());
        dispatch(getDolarValue());
      }, [cartUser]);

    function handleConfirm(e) {
        e.preventDefault();
        dispatch(addToOrderConfirmed({orderId: order.id, status: "Confirmado", dolarValue: dolarValue}));
        dispatch(deleteOrder({orderId: order.id}))
        history('/orderStatus');
    }

   
return (
    error ? <h1>CARRITO VACIO</h1> :
   (order.hasOwnProperty('id') && order.models.length>0? (
<section class="antialiased bg-gray-100 text-gray-600 px-4" x-data="app">
    <div class="flex flex-col justify-center py-3  ">
       
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <div class="font-semibold text-gray-800">Su Pedido</div>
            </header>

            <div class="overflow-x-auto p-3">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th></th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Pieza Solicitada</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Cantidad</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Subtotal</div>
                            </th>
                            <th class="p-2">
                                <div class="font-semibold text-center">Eliminar</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                       {order.models.map(m => <OrderDetail key={m.id} id= {m.id} name= {m.name} image= {m.image} orderDetail= {m.OrderDetail} price= {m.price} dolarValue={dolarValue} /> )}
                    </tbody>
                </table>
            </div>
           
            <div class="flex items-center justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
             <p className="px-4 font-semibold text-xl">TOTAL:</p>$ {formateNumber(order.totalBudget*dolarValue)}
            </div>

            <div class="flex justify-end">
                <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
            </div>
            <div className="flex flex-row justify-center mb-3">
                <button className="confirm flex items-center gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-xl" 
                    type='button' onClick={handleConfirm}>
                <span>Confirmar Pedido</span>
                <span className="hidden"> {<GiConfirmed className="text-xl"/>} </span>
                </button>
            </div>
        </div>
    </div>
</section> ) : 
     <h1>Cargando</h1>)
    )
}

export default Order;


