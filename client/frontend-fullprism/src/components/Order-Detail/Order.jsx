
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemOrder, addToOrderConfirmed, deleteOrder, getDolarValue, getCartUser, generateOrder, dataForBudget } from "../../actions/userActions";
import { formateNumber } from '../../utils/functions';
import OrderDetail from "./OrderDetail";
import {GiConfirmed} from "react-icons/gi";
import {LuMailCheck} from "react-icons/lu";
import {FiDownload} from "react-icons/fi";
import './order.css';
import Presupuesto from "../Presupuesto/Presupuesto";
import Loading from "../Loading/Loading";

const Order= ()=> {

    const dispatch= useDispatch();
    let order= useSelector((state)=> state.userOrder); 
    let modelsCart= useSelector((state)=> state.modelsInCart);
    let cartUser= useSelector((state)=> state.cartUser);
    console.log(cartUser);
    let error= useSelector((state)=> state.error);
    let history= useNavigate();
    let dolarValue= useSelector((state)=> state.dolarValue.valor);
    let [observations, setObservations]= useState('');
    let [changeButtons, setChangeButtons]= useState(true);
    let [modal, setModal]= useState(false);
    let [renderBudget, setRenderBudget]= useState(false);
    let [download, setDownload]= useState(false);
    let [sendByEmail, setSendByEmail]= useState(false);
    const data= useSelector((state)=> state.dataBudget);

 console.log( 'ORDER' , order);

    useEffect(() => {
        if (order!==null || order.hasOwnProperty('models')) { 
            dispatch(deleteItemOrder());
        } else if (!order.hasOwnProperty('models')){
            dispatch(generateOrder())
        }
        dispatch(getDolarValue());
        dispatch(getCartUser());
      }, [modelsCart]
    );


    function handleChange(e) {
        setObservations(e.target.value)
    }

    function handleConfirm(e) {
        e.preventDefault();
        setChangeButtons(false);
        dispatch(dataForBudget({orderId: order.id, dolarValue: dolarValue, observations: observations}));
        setRenderBudget(true);   
        setSendByEmail(true);
    }

    function handleConfirmBudget(e) {
        e.preventDefault();
        setModal(true)
    }

    function handleCloseModal(e) {
        e.preventDefault();
        setModal(false);
    }

    function handleAccept(e) {
        e.preventDefault();
        dispatch(addToOrderConfirmed({orderId: order.id, status: "Confirmado", dolarValue: dolarValue, observations: observations}));
        dispatch(deleteOrder({orderId: order.id}));
        history('/orderStatus')
    }

    function handleCancel(e) {
        setModal(false);
    }

    function handleDownload(e){
        if(!data.hasOwnProperty('order')) dispatch(dataForBudget({orderId: order.id, dolarValue: dolarValue, observations: observations}));
        setDownload(true);
        setRenderBudget(true);
    }

   function handleReturn(e) {
    e.preventDefault();
    history('/piezas');
   }

  
return (
   
(order!==null &&order.hasOwnProperty('models') && cartUser.hasOwnProperty('items')&&cartUser.items.length)? (
<section className="antialiased bg-customBlue text-gray-600 px-4 py-36" x-data="app">
    <div className="flex flex-col justify-center py-3  ">
       <div>
        <div className={`w-full max-w-2xl mx-auto bg-white shadow-lg shadow-gray-700 rounded-lg border border-gray-200 ${modal ? 'container' : ''}`}>
            <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-gray-800">Su Pedido</div>
            </header>

            <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
                        <tr>
                            <th></th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Pieza Solicitada</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Cantidad</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Subtotal</div>
                            </th>
                            <th className="p-2">
                                <div className="font-semibold text-center">Eliminar</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                       {order.models.map(m => <OrderDetail key={m.id} id= {m.id} name= {m.name} image= {m.image} orderDetail= {m.OrderDetail} price= {m.price} dolarValue={dolarValue} /> )}
                    </tbody>
                </table>
            </div>
           
           <div className="px-3 pt-2 pb-4">
           <label className='text-sm px-1'>Observaciones:</label> <br/>
                <textarea name='observations' placeholder='Escriba las observaciones que considere necesarias' className="text-sm rounded-xl items-center border-1 border-gray-200 w-full h-20" value={observations} type='text' onChange={(e)=>handleChange(e)}></textarea>
           </div>

            <div className="flex items-center justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
             <p className="px-4 font-semibold text-xl">TOTAL:</p>$ {formateNumber(order.totalBudget*dolarValue)}
            </div>

            <div className="flex justify-end">
                <input type="hidden" className="border border-black bg-gray-50" x-model="selected" />
            </div>
           
                { changeButtons?
                 <div className="flex flex-row justify-center mb-6">
                    <button className="confirm flex items-center gap-2 bg-customBlue2 text-white font-bold py-2 px-4 rounded-xl" 
                        type='button' onClick={handleConfirm}>
                    <span>Confirmar Pedido</span>
                    <span className="hidden"> {<GiConfirmed className="text-xl"/>} </span>
                    </button>
                 </div> 
                    :
      
                    <div className="flex flex-col items-center justify-center"> 
                        <div className="flex items-center gap-2">
                            {<LuMailCheck />}
                            <p className="text-sm font-thin"> Hemos enviado el presupuesto a su mail</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 p-4">
                            <div className="flex items-center gap-2 bg-blue-200 font-normal text-sm py-2 px-4 rounded-md"> 
                                <a href="#presup">Ver Presupuesto</a>
                            </div>
                       
                            <button className="flex items-center gap-2 bg-blue-200 font-normal text-sm py-2 px-4 rounded-md" onClick={(e)=>handleDownload(e)}>
                                {<FiDownload />}
                                <span>Descargar Presupuesto</span>
                            </button>
                        </div>
                        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="confirm flex items-center gap-2 bg-blue-500 text-white font-bold py-2 px-4 mb-6 rounded-xl" onClick={(e)=>{handleConfirmBudget(e)}}>
                            Confirmar Presupuesto
                            <span className="hidden"> {<GiConfirmed className="text-xl"/>} </span>
                        </button>                
                        
                    </div>

                
                }
              

        </div>
        {renderBudget &&data.hasOwnProperty('order') && download===false ? 
        <div id="presup" className="bg-white items-center flex justify-center mx-20 mt-20 pb-6">
            <Presupuesto download= {download} sendByMail= {sendByEmail} /> 
        </div>: 
        renderBudget &&data.hasOwnProperty('order') && download ? 
        <div className="bg-white items-center flex justify-center mx-20 mt-6 pb-6">
            <Presupuesto download= {download} />
        </div>  :null
        }

        {modal?

            <div className="details-modal">
                <button className="details-modal-close" type='button' onClick={(e)=>{handleCloseModal(e)}}>
                x
                </button>
            <div className="details-modal-title">
                <h1>Confirmar Presupuesto</h1>
            </div>
            <div className="details-modal-content">
                <p>
                ¡Nos complace que estés considerando nuestro presupuesto! <br/>
                Queremos recordarte  que al aceptar este presupuesto, estarás indicando tu interés en adquirir nuestros productos/servicios y, 
                por lo tanto, pondremos tu pedido en la cola de producción. <br/>
                Si tienes alguna pregunta o necesitas más información antes de tomar 
                una decisión, no dudes en ponerte en contacto con nosotros. Estamos para ayudarte en todo lo que necesites.<br/>
                ¡Gracias por considerar nuestra propuesta!
                </p>
                <div className="flex items-center justify-center gap-4 py-6">
                    <button className="bg-green-400 rounded-full text-stone-100 px-3 py-2 uppercase text-sm hover:px-4 hover:scale-110 transition duration-600 hover:opacity-60 hover:font-bold hover:text-black" onClick={(e)=> {handleAccept(e)}}>Aceptar</button>
                    <button className="bg-red-400 rounded-full text-stone-100 px-3 py-2 uppercase text-sm hover:px-4 hover:scale-110 transition duration-600 hover:opacity-60 hover:font-bold hover:text-black" onClick={(e)=> {handleCancel(e)}}>Cancelar</button>
                </div>
            </div>
            </div>
        : null
        }

       
        </div>
        
    </div>

</section> ) : 
//  error || order==null || (cartUser.hasOwnProperty('items')&&!cartUser.items.length) ? 
//  <div className="flex flex-col items-center justify-center mb-80 pt-36">
//      <h1 className="p-6 font-bold text-center">No hay Productos Agregados</h1>
//      <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-xl" onClick={(e)=> handleReturn(e)}> Seleccionar Productos</button> 
//  </div> :
    <div className="bg-customBlue">
     <Loading />
     </div>
)
}

export default Order;


