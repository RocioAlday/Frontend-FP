import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { changeStatusItemOrder, getAllOrders } from "../../actions/userActions";
import { copyLink } from "../../utils/functions";
import { LuLink } from 'react-icons/lu';

const RowTableOrders= ({orderId, modelId, fechaSolicitud, quantity, color, status, name, material, link, priority })=> {

	const dispatch= useDispatch();
    const [editing, setEditing]= useState(false);
    const [statusChange, setStatus]= useState(status);
    const [colorBg, setColorBg]= useState('');
    const [bgPriority, setBgPriority]= useState('');

    function handleEdit() {
		setEditing(true);
	}

    useEffect(()=> {
        if(statusChange === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(statusChange === 'Entregado') setColorBg("bg-orange-200");
        if(statusChange === 'Facturado') setColorBg("bg-yellow-200");
        if(statusChange === 'Cobrado') setColorBg("bg-gray-200");
        priority === false ? setBgPriority("bg-gray-200") : setBgPriority("bg-red-200")
    }, [statusChange])

    function handleChange(e) {
		setStatus(e.target.value);
        console.log(e.target.value);
        if(e.target.value === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(e.target.value === 'Entregado') setColorBg("bg-orange-200");
        if(e.target.value === 'Facturado') setColorBg("bg-yellow-200");
        if(e.target.value === 'Cobrado') setColorBg("bg-gray-200");
	}

	function handleCopyLink(e) {
		e.preventDefault();
		console.log(link)
		copyLink(link)
	}
    

    function handleSave(e) {
        e.preventDefault();
		dispatch(changeStatusItemOrder({status: statusChange, orderId: orderId, modelId: modelId}));
        // dispatch(getAllOrders())
		setEditing(false);
    
       
	}

	function handleCancel(e) {
        e.preventDefault();
		setEditing(false);
	}

    return (
        <tr className=" bg-gray-50 dark:bg-gray-700 border-y-2">
           
                <td className="p-2 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {name}
                
                </td>
             
                <td className="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                    {quantity}
                </td>
             
                <td className="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                    {material}
                </td>
            
                <td className="p-4 text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-white">
				  <button onClick={(e)=> handleCopyLink(e)}> <LuLink/> </button>
			    </td>
    
                <td className="p-4 text-center text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                   {color}
                </td>
            
                <td className="p-4 text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{fechaSolicitud}
                </td>
                <td className="p-4 text-sm text-center font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                <div className={`py-1 px-0 mr-5 rounded-full ${bgPriority}`}>
                        {priority === true? <span>Prioritario</span>  :
                       <p className="text-sm text-gray-500">Sin Prioridad </p>}
                    
               </div>
               </td>
                <td className="text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				<div className={`py-1 px-0 rounded-full ${colorBg}`}>
                {editing?
					<select name='status' defaultValue='Seleccione un estado' onChange={(e)=>handleChange(e)} className= "py-0.5 text-sm rounded-lg" >
                    <option disabled value='Seleccione un estado'>Seleccione Estado</option>
                    <option value='Impresión Finalizada' className="bg-green-200">Impresión Finalizada</option>
                    <option value='Entregado' className="bg-orange-200">Entregado</option>
                    </select>
				    : statusChange
				}
                </div>
                </td>
                <td className="p-4 text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {editing?
                    <div className="flex flex-col gap-2">
                    <button className="text-xs bg-green-100 text-green-800 rounded-md p-1" onClick={(e)=>handleSave(e)}>GUARDAR</button>
                    <button className="text-xs bg-red-100 text-red-800 rounded-md p-1" onClick={(e)=>handleCancel(e)}>CANCELAR</button>
                    </div> :
                    <button onClick={handleEdit}> <BiEdit/></button>
                    }
                    
                </td>	
		</tr>
    )
};

export default RowTableOrders;
	