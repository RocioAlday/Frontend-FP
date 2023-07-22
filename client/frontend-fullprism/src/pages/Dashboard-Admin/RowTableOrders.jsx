import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { changeStatusItemOrder, getAllOrders } from "../../actions/userActions";

const RowTableOrders= ({orderId, modelId, fechaSolicitud, quantity, color, status, name, material, link, priority })=> {

	const dispatch= useDispatch();
    const [editing, setEditing]= useState(false);
    const [statusChange, setStatus]= useState('');
    const [colorBg, setColorBg]= useState('');
    const [bgPriority, setBgPriority]= useState('');

    function handleEdit() {
		setEditing(true);
	}

    useEffect(()=> {
        if(status === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(status === 'Entregado') setColorBg("bg-orange-200");
        if(status === 'Facturado') setColorBg("bg-yellow-200");
        if(status === 'Cobrado') setColorBg("bg-gray-200");
        priority === false ? setBgPriority("bg-gray-200") : setBgPriority("bg-red-200")
    }, [])

    function handleChange(e) {
		setStatus(e.target.value)
        if(e.target.value === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(e.target.value === 'Entregado') setColorBg("bg-orange-200");
        if(e.target.value === 'Facturado') setColorBg("bg-yellow-200");
        if(e.target.value === 'Cobrado') setColorBg("bg-gray-200");
	}

    

    function handleSave() {
		dispatch(changeStatusItemOrder({status: statusChange, orderId: orderId, modelId: modelId}));
        dispatch(getAllOrders())
		setEditing(false);
       
	}

	function handleCancel() {
		setEditing(false);
	}

    return (
        <tr class=" bg-gray-50 dark:bg-gray-700 border-y-2">
           
                <td class="p-2 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {name}
                
                </td>
             
                <td class="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                    {quantity}
                </td>
             
                <td class="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                    {material}
                </td>
            
                <td class="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
				    {link}
			    </td>
    
                <td class="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                   {color}
                </td>
            
                <td className="p-4 text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{fechaSolicitud}
                </td>
                <td class="p-4 text-sm text-center font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                <div className={`py-1 px-0 mr-5 rounded-full ${bgPriority}`}>
                        {priority === true? <span>Prioritario</span>  :
                       null }
                    
               </div>
               </td>
                <td className="text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				<div className={`py-1 px-0 rounded-full ${colorBg}`}>
                {editing?
					<select name='status' defaultValue='Seleccione un estado' onChange={handleChange} className= "py-0.5 text-sm rounded-lg" >
                    <option disabled value='Seleccione un estado'>Seleccione Estado</option>
                    <option value='Impresión Finalizada' className="bg-green-200">Impresión Finalizada</option>
                    <option value='Entregado' className="bg-orange-200">Entregado</option>
                    </select>
				    : statusChange? statusChange : status
				}
                </div>
                </td>
                <td className="p-4 text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {editing?
                    <div className="flex flex-col gap-2">
                    <button className="text-xs bg-green-100 text-green-800 rounded-md p-1" onClick={handleSave}>GUARDAR</button>
                    <button className="text-xs bg-red-100 text-red-800 rounded-md p-1" onClick={handleCancel}>CANCELAR</button>
                    </div> :
                    <button onClick={handleEdit}> <BiEdit/></button>
                    }
                    
                </td>	
		</tr>
    )
};

export default RowTableOrders;
	