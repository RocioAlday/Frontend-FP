
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeConfirmedOrderStatus, getOrdersForBilling } from "../../actions/userActions";
import RowTableOrdersForBilling from "./RowTableOrdersForBilling";


const OrderForFact= ()=> {
    let dispatch= useDispatch();
    let ordersForBilling= useSelector((state)=> state.ordersForBilling);
	const ordersList= useSelector((state)=> state.ordersList);
	let [update, setUpdate]= useState(false);
	console.log(update)
	console.log(ordersList);
    console.log(ordersForBilling);

    useEffect(()=> {
        dispatch(getOrdersForBilling());
    }, [update]);

	function handleConfirm(e) {
		e.preventDefault();
		dispatch(changeConfirmedOrderStatus (ordersList)) //mandarle el state global donde almacené los objetos para fact
		setUpdate(true)
	}

    return (
		ordersForBilling.length?
        <div class="flex flex-col mt-6 md:mx-20">
			<div class="overflow-x-auto rounded-lg">
				<div class="inline-block min-w-full align-middle">
					<div class="overflow-hidden shadow sm:rounded-lg px-14">
						<table
							class="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead class="bg-gray-50 dark:bg-gray-700">
								<tr className="text-center">
									<th scope="col"
										class="p-2 text-md text-left font-medium tracking-wider text-gray-500 uppercase dark:text-white">

									</th>
									<th
										scope="col"
										class="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Cliente
									</th>
									<th
										scope="col"
										class="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										CUIT
									</th>
									<th
										scope="col"
										class="p-2 mr-16 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Condición Impositiva
									</th>
									<th
										scope="col"
										class="p-2 pl-6 mt-1 flex gap-20 text-md text-left font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>	
										<p className="text-left">Nombre de Pieza</p>
										<p className="text-left">Cantidad</p>
										<p className="text-left">Monto por Unidad</p>
									</th>
									<th
										scope="col"
										class="p-2 mr-16 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Observaciones
									</th>
									
                                    <th
										scope="col"
										class="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										FACTURADO
									</th>
								</tr>
							</thead>
							<tbody class="bg-white dark:bg-gray-800">
                            	{ordersForBilling.map((o, index)=> <RowTableOrdersForBilling key={o.index} id= {o.orderId} index= {index+1} userId= {o.userId} models= {o.detailModels} dolar= {o.dolarValue} observations= {o.observations} />)}
                            </tbody>
                                </table>
								<div className="flex justify-end">
								<button className="mr-3 my-4 px-4 py-2 text-gray-600 rounded-full uppercase text-sm font-medium tracking-wide  bg-green-300 hover:bg-green-500 hover:text-gray-100 hover:py-2.5" onClick={(e)=> handleConfirm(e)}>Confirmar Facturación</button>
								</div>
                                </div>
                                </div>
                                </div>
                                </div> :
								
								<h1 className="p-20 text-gray-600 text-center font-medium">NO EXISTEN PEDIDOS LISTOS PARA FACTURAR</h1>
    )
};  

export default OrderForFact;