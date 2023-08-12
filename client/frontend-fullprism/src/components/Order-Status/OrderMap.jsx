import React from "react";
import { changeData } from "../../utils/functions";



const OrderMap= ({props})=> {
const order= props.order;
const detailModels= props.detailModels;

return(
<div className="flex md:flex-row sm:flex-col items-center justify-center w-full">
<div className=" flex flex-col items-center justify-center">

  <div className="m-5 p-6 px-10 my-3 gap-4 border-2 bg-gray-100 shadow-lg shadow-gray-700  flex flex-col md:flex-row sm:flex-col items-center justify-evenly md:rounded-xl">
  
      <div className="flex flex-row justify-between w-full">
        <div className="order-tracking completed">
          <span className="is-complete"></span>
          <p>Pedido Confirmado<br /><span>{changeData(order.fechaSolicitud)}</span></p>
        </div>
        <div className= {order.fechaImpresionFinalizada !== null? "order-tracking completed" : "order-tracking" }>
          <span className= "is-complete"></span>
          <p>Impresión Finalizada<br /><span> {order.fechaImpresionFinalizada !== null? changeData(order.fechaImpresionFinalizada) : null}</span></p>
        </div>
        <div className= {order.fechaRetirado !== null? "order-tracking completed" : "order-tracking"}>
          <span className="is-complete"></span>
          <p>Entregado<br /><span>{order.fechaRetirado !== null? changeData(order.fechaRetirado) : null}</span></p>
        </div>
        <div className={order.fechaFacturado !== null? "order-tracking completed" : "order-tracking"}>
          <span className="is-complete"></span>
          <p>Facturado<br /><span>{order.fechaFacturado !== null? changeData(order.fechaFacturado) : null}</span></p>
        </div>
      </div>

    
    <dl className=" md:w-80  bg-gray-100 text-gray-600 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 w-full">
    <div className="flex flex-row pb-3">
    <dt className="mb-1 pb-3 text-gray-800 md:text-md dark:text-gray-400 pr-2">Nro.Orden: </dt>
    {order.orderId}
    </div>
    <div className="flex flex-row pb-3 w-full">
        <dt className="mb-1 text-gray-800 md:text-md dark:text-gray-400 pr-2">Piezas / Cantidades: </dt>    
          {
              detailModels.map(m=> {
                return <dd key={`${order.orderId}${m.modelId}`}  className="text-sm px-1 text-center mt-0.5 w-full">{m.name} (cant: {m.quantity})  </dd>
              })
            
            }  
    </div>
    <div className="flex flex-row pb-3">
    <dt className="mb-1 text-gray-800 md:text-md dark:text-gray-400 pr-2">Total Presupuesto: </dt>
    $ {order.totalBudget}
    </div>
  
    </dl>
</div>
</div>
</div> 
)

}




export default OrderMap;