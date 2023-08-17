
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeConfirmedOrderStatus, getOrdersForBilling } from "../../actions/userActions";
import RowTableOrdersForBilling from "./RowTableOrdersForBilling";


const OrderForFact= ()=> {
    let dispatch= useDispatch();
    let ordersForBilling= useSelector((state)=> state.ordersForBilling);
	const ordersList= useSelector((state)=> state.ordersList);

	console.log(ordersList);
    console.log(ordersForBilling);

    useEffect(()=> {
        dispatch(getOrdersForBilling());
    }, [dispatch]);

	function handleConfirm(e) {
		e.preventDefault();
		dispatch(changeConfirmedOrderStatus (ordersList)); 
	}

    return (
		ordersForBilling.length?
        <div className="flex flex-col mt-2 mb-20">
			<h2 className="text-start px-6 pb-4 font-thin text-white">Tablero de Facturación:</h2>
			<div className="overflow-x-auto rounded-lg">
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden shadow sm:rounded-lg mx-6">
						<table
							className="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead className="bg-gray-50 dark:bg-gray-700">
								<tr className="text-center">
									<th scope="col"
										className="p-2 text-md text-left font-medium tracking-wider text-gray-500 uppercase dark:text-white">

									</th>
									<th
										scope="col"
										className="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Cliente
									</th>
									<th
										scope="col"
										className="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										CUIT
									</th>
									<th
										scope="col"
										className="p-2 mr-16 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Condición Impositiva
									</th>
									<th
										scope="col"
										className="p-2 pl-6 mt-1 flex gap-20 text-md text-left font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>	
										<p className="text-left">Nombre de Pieza</p>
										<p className="text-left">Cantidad</p>
										<p className="text-left">Monto por Unidad</p>
									</th>
									<th
										scope="col"
										className="p-2 mr-16 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Observaciones
									</th>
									
                                    <th
										scope="col"
										className="p-4 text-xs tracking-wider text-center text-red-600 uppercase dark:text-white"
									>
										FACTURADO
									</th>
								</tr>
							</thead>
							<tbody className="bg-white dark:bg-gray-800">
                            	{ordersForBilling.map((o)=> <RowTableOrdersForBilling key={o.index} id= {o.orderId} index= {o.orderId} userId= {o.userId} models= {o.detailModels} dolar= {o.dolarValue} observations= {o.observations} />)}
                            </tbody>
                                </table>
								
                                </div>
								<div className="flex justify-end">
								<button className="mr-6 my-4 px-4 py-2 text-gray-600 rounded-full uppercase text-sm font-medium tracking-wide  bg-green-300 hover:bg-green-500 hover:text-gray-100 hover:py-2.5" onClick={(e)=> handleConfirm(e)}>Confirmar Facturación</button>
								</div>
                                </div>
                                </div>
                                </div> :
								
								<h1 className="p-20 text-gray-50 text-center font-medium">NO EXISTEN PEDIDOS LISTOS PARA FACTURAR</h1>
    )
};  

export default OrderForFact;