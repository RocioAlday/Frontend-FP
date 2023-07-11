import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllModels } from "../../actions/userActions";
import RowTable from "./RowTable";

const EditModels= ()=> {

    let models= useSelector((state)=> state.allModels);
    const dispatch= useDispatch();
    console.log(models);
    useEffect(()=> {
        dispatch(getAllModels())
    }, []);

    return (
        <div class="flex flex-col my-10">
			<div class="overflow-x-auto rounded-lg">
				<div class="inline-block min-w-full align-middle">
					<div class="overflow-hidden shadow sm:rounded-lg px-14">
						<table
							class="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead class="bg-gray-50 dark:bg-gray-700">
								<tr>
									<th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Imagen
									</th>
                                    <th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Nombre
									</th>
									<th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Material
									</th>
									<th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Empresa Cliente
									</th>
									<th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Precio
									</th>
									<th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										link
									</th>
                                    <th
										scope="col"
										class="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										EDITAR
									</th>
								</tr>
							</thead>
							<tbody class="bg-white dark:bg-gray-800">
								{models.map( m=> <RowTable id= {m.id} name= {m.name} material= {m.material} price= {m.price} link= {m.link} image= {m.image} companyName= {m.companyName} /> )}	
                            </tbody>
                                </table>
                                </div>
                                </div>
                                </div>
                                </div>
    )
};

export default EditModels;