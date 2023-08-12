import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterByStatus, getAllOrders } from "../../actions/userActions";
import RowTableOrders from "./RowTableOrders";
import { sliceDate } from "../../utils/functions";

const ProductionDash= ()=> {
	let allOrders= useSelector((state)=> state.allOrders);
	let ordersFiltered= useSelector((state)=> state.ordersCopy);
	console.log(ordersFiltered);
	let ordersToShow= ordersFiltered.length ? ordersFiltered : allOrders;
	const dispatch= useDispatch();

	useEffect(()=> {
        dispatch(getAllOrders())
    }, []);

 console.log(allOrders);

	function handleFilterByStatus(e) {
		e.preventDefault();
        dispatch(filterByStatus(e.target.value));
	}

    return (
		allOrders? 
        	<div className="flex flex-col mt-2 mb-20">
			<div className="overflow-x-auto rounded-lg">
				<h2 className="text-start px-6 pb-4 font-thin text-white">Tablero de Producción:</h2>
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden shadow sm:rounded-lg mx-6">
						<table
							className="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead className="bg-gray-50 dark:bg-gray-700">
								<tr className="text-center">
									<th
										scope="col"
										className="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Pieza
									</th>
									<th
										scope="col"
										className=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Cantidad
									</th>
									<th
										scope="col"
										className=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Material
									</th>
									<th
										scope="col"
										className=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Link
									</th>
									<th
										scope="col"
										className=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Color
									</th>
										
									<th
										scope="col"
										className=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Fecha de solicitud
									</th>
									<th
										scope="col"
										className="text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Prioridad
									</th>
									
									<th scope="col" className="text-md font-medium tracking-wider text-center">
										<select className="w-36 border-none tracking-wider text-center text-gray-500 dark:text-white bg-gray-50" name="filters" onChange={e => handleFilterByStatus(e)} defaultValue="default">
											<option className="text-md font-medium" disabled value="default">
												ESTADO
											</option>
											<option className='text-sm' value="todos">Todos</option>
											<option className='text-sm' value="Confirmado">Confirmado</option>
											<option className='text-sm' value="Impresión Finalizada">Impresión Finalizada</option>
											<option className='text-sm' value="Facturado">Facturado</option>
											<option className='text-sm' value="Entregado">Entregado</option>
											<option className='text-sm' value="Cobrado">Cobrado</option>
											
										</select>
									</th>
									<th
										scope="col"
										className="text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white pr-4"
									>
										Editar
									</th>
								</tr>
							</thead>
							<tbody className=" bg-white dark:bg-gray-800">	
								
								{
								ordersToShow.map(o=> {
									return	o.detailModels.map(m=> <RowTableOrders key={`${o.orderId}-${m.modelId}`} orderId= {o.orderId} modelId= {m.modelId} quantity= {m.quantity} color= {m.color} status= {m.status} 
										name= {m.name} material= {m.material} link= {m.link} fechaSolicitud= {sliceDate(o.fechaSolicitud)} priority= {m.priority} /> )
									}
								)}
								
                                </tbody>
                                </table>
                                </div>
                                </div>
                                </div>
            </div>
		: 'NO HAY ORDENES'
    )
}

export default ProductionDash;