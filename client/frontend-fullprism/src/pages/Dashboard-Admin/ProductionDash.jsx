import React from "react"
import RowTable from "./RowTable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../../actions/userActions";
import RowTableOrders from "./RowTableOrders";
import { sliceDate } from "../../utils/functions";

const ProductionDash= ()=> {
	let allOrders= useSelector((state)=> state.allOrders);
	const dispatch= useDispatch();

	useEffect(()=> {
        dispatch(getAllOrders())
    }, []);

console.log(allOrders);

    return (
		allOrders? 
        	<div class="flex flex-col mt-6 mb-20">
			<div class="overflow-x-auto rounded-lg">
				<div class="inline-block min-w-full align-middle">
					<div class="overflow-hidden shadow sm:rounded-lg px-14">
						<table
							class="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead class="bg-gray-50 dark:bg-gray-700">
								<tr className="text-center">
									<th
										scope="col"
										class="p-2 text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Pieza
									</th>
									<th
										scope="col"
										class=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Cantidad
									</th>
									<th
										scope="col"
										class=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Material
									</th>
									<th
										scope="col"
										class=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Link
									</th>
									<th
										scope="col"
										class=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Color
									</th>
										
									<th
										scope="col"
										class=" text-md text-center font-medium tracking-wider text-gray-500 uppercase dark:text-white"
									>
										Fecha de solicitud
									</th>
									<th
										scope="col"
										class="text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Prioridad
									</th>
									
									<th
										scope="col"
										class="text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Status
									</th>
									<th
										scope="col"
										class="text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white pr-4"
									>
										Editar
									</th>
								</tr>
							</thead>
							<tbody class=" bg-white dark:bg-gray-800">	
								
								{
									
								allOrders.map(o=> {
									return	o.detailModels.map(m=> <RowTableOrders key={m.modelId} orderId= {o.orderId} modelId= {m.modelId} quantity= {m.quantity} color= {m.color} status= {m.status} 
										name= {m.name} material= {m.material} link= {m.link} fechaSolicitud= {sliceDate(o.fechaSolicitud)} priority= {o.priority} /> )
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