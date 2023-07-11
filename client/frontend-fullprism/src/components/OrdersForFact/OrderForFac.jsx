
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersForBilling } from "../../actions/userActions";
import RowTableOrdersForBilling from "./RowTableOrdersForBilling";


const OrderForFact= ()=> {
    let dispatch= useDispatch();
    let ordersForBilling= useSelector((state)=> state.ordersForBilling);
    console.log(ordersForBilling);

    useEffect(()=> {
        dispatch(getOrdersForBilling())
    }, []);

    return (
        <div class="flex flex-col mt-6">
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
										class="py-4 pl-10 flex flex-row gap-24 justify-left text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
									>
										Cliente
								
                                 
									<p>	Nombre de Pieza </p>
                                    <p>Cantidad</p>
										
									</th>
									<th
										scope="col"
										class="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Monto Total
									</th>
									
                                    <th
										scope="col"
										class="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										FACTURAR
									</th>
								</tr>
							</thead>
							<tbody class="bg-white dark:bg-gray-800">
                            {ordersForBilling.map(o=> <RowTableOrdersForBilling id= {o.id} models= {o.models} totalBudget= {o.totalBudget} />)}
                            </tbody>
                                </table>
                                </div>
                                </div>
                                </div>
                                </div>
    )
};  

export default OrderForFact;