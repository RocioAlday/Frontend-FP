import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './orderStatus.css';
import { getUserOrders } from "../../actions/userActions";
import { changeData } from "../../utils/functions";

const OrderStatus= ()=> {
  const userOrders= useSelector((state)=> state.userOrdersOpen);
  const dispatch= useDispatch();

  useEffect(()=> {
    dispatch(getUserOrders());
  }, [])

    return (
      userOrders.length?
      <>
      <p className="px-12 py-10 pb-1 font-semibold">ESTADO DE SUS PEDIDOS</p>
      {userOrders.map(o => {
        return (
        <div key={o.id} className="flex md:flex-row sm:flex-col items-center justify-center">
        <div className=" flex flex-col w-full">
  
          <div className="m-5 p-6 my-3 gap-4 border-y-2 bg-gray-100 flex flex-col md:flex-row sm:flex-col items-center justify-evenly ">
          
              <div className="flex flex-row justify-between">
                <div className="order-tracking completed">
                  <span className="is-complete"></span>
                  <p>Pedido Confirmado<br /><span>{changeData(o.fechaSolicitud)}</span></p>
                </div>
                <div className= {o.fechaImpresionFinalizada !== null? "order-tracking completed" : "order-tracking" }>
                  <span className= "is-complete"></span>
                  <p>Impresión Finalizada<br /><span> {o.fechaImpresionFinalizada !== null? changeData(o.fechaImpresionFinalizada) : null}</span></p>
                </div>
                <div className= {o.fechaRetirado !== null? "order-tracking completed" : "order-tracking"}>
                  <span className="is-complete"></span>
                  <p>Entregado<br /><span>{o.fechaRetirado !== null? changeData(o.fechaRetirado) : null}</span></p>
                </div>
                <div className={o.fechaFacturado !== null? "order-tracking completed" : "order-tracking"}>
                  <span className="is-complete"></span>
                  <p>Facturado<br /><span>{o.fechaFacturado !== null? changeData(o.fechaFacturado) : null}</span></p>
                </div>
              </div>
      
            
            <dl class=" md:w-80  bg-gray-100 text-gray-600 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div class="flex flex-row pb-3">
            <dt class="mb-1 pb-3 text-gray-800 md:text-md dark:text-gray-400 pr-2">Nro.Orden: </dt>
            {o.orderId}
            </div>
            <div class="flex flex-row pb-3">
                <dt class="mb-1 text-gray-800 md:text-md dark:text-gray-400 pr-2">Piezas / Cantidades: </dt>    
                  {
                      o.detailModels.map(m=> {
                        return <dd class="text-sm px-1 text-center mt-0.5">{m.name} (cant: {m.quantity}) - </dd>
                      })
                    
                    }  
            </div>
            <div class="flex flex-row pb-3">
            <dt class="mb-1 text-gray-800 md:text-md dark:text-gray-400 pr-2">Total Presupuesto: </dt>
            $ {o.totalBudget}
            </div>
           
        </dl>
          </div>
          
  
  
        </div>
  
      </div> 
        )
      })}
      </>
  //     <div className="flex md:flex-row sm:flex-col items-center justify-center">
        
  //     {/* <p className="md:pl-56 pl-20 font-semibold">ESTADO DE SUS PEDIDOS</p> */}
  //     <div className="py-10 flex flex-col w-full">


  //       {/* mapeo todos los orders abiertos: */}

  //       <div className="m-10 py-16 px-6 gap-4 border-y-2 bg-gray-100 flex flex-col md:flex-row sm:flex-col justify-evenly ">

        
  //           <div className="flex flex-row justify-between">
  //             <div className="order-tracking completed">
  //               <span className="is-complete"></span>
  //               <p>Pedido Confirmado<br /><span>Mon, June 24</span></p>
  //             </div>
  //             <div className="order-tracking completed">
  //               <span className="is-complete"></span>
  //               <p>Impresión Finalizada<br /><span>Tue, June 25</span></p>
  //             </div>
  //             <div className="order-tracking">
  //               <span className="is-complete"></span>
  //               <p>Entregado<br /><span>Fri, June 28</span></p>
  //             </div>
  //             <div className="order-tracking">
  //               <span className="is-complete"></span>
  //               <p>Facturado<br /><span>Fri, June 28</span></p>
  //             </div>
  //           </div>
    
          
  //         <dl class="max-w-md border-y-2  bg-gray-100 text-gray-600 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
  //         <div class="flex flex-row pb-3">
       
  //             <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400 pr-2">Email address: </dt>
  //             {userOrders.map(o=> {
  //         // lo que esta en dl iria en otro componente 
  //         return (
  //           o.detailModels.map(m=> <dd class="text-md font-semibold">{m.name} {m.quantity}</dd> )
  //         )
  //             }
  //         )}
          
              
  //         </div>
  //         <div class="flex flex-row py-3">
  //             <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400 pr-2">Home address</dt>
  //             <dd class="text-md font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
  //         </div>
  //         <div class="flex flex-row pt-3">
  //             <dt class="mb-1 text-gray-500 md:text-md dark:text-gray-400 pr-2">Phone number</dt>
  //             <dd class="text-md font-semibold">+00 123 456 789 / +12 345 678</dd>
  //         </div>
  //     </dl>
  //       </div>
        


  //     </div>

  // </div> 
  
   : 'NO TIENE PEDIDOS PENDIENTES O EN CURSO'
     
      
     
    )
};

export default OrderStatus;
