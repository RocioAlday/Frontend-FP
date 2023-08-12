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
        <div className="flex flex-col mb-20 mt-2">
			<h2 className="text-start px-6 pb-4 font-thin text-white">Modificar Modelos:</h2>
			<div className="overflow-x-auto rounded-lg">
				<div className="inline-block min-w-full align-middle">
					<div className="overflow-hidden shadow sm:rounded-lg mx-6">
						<table
							className="w-full divide-y divide-gray-200 dark:divide-gray-600"
						>
							<thead className="bg-gray-50 dark:bg-gray-700">
								<tr>
									<th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Imagen
									</th>
                                    <th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Nombre
									</th>
									<th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Material
									</th>
									<th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Empresa Cliente
									</th>
									<th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										Precio
									</th>
									<th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										link
									</th>
                                    <th
										scope="col"
										className="p-4 text-md font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white"
									>
										EDITAR
									</th>
								</tr>
							</thead>
							<tbody className="bg-white dark:bg-gray-800">
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