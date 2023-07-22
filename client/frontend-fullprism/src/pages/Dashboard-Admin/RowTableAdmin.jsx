import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { modifyOrderByAdmin, modifyPriority } from "../../actions/userActions";

const RowTableAdmin= ({orderId, modelId, company, fechaSolicitud, priority, quantity, color, status, name, material})=> {

	const dispatch= useDispatch();
    const [editing, setEditing]= useState(false);
    const [colorBg, setColorBg]= useState('');
    const [editedData, setEditedData]= useState({
		status,
		quantity,
		material,
		color
	});
    const [newPriority, setPriority]= useState(priority)
    const [bgPriority, setBgPriority]= useState('');
   
    useEffect(()=> {
        if(status === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(status === 'Entregado') setColorBg("bg-orange-200");
        if(status === 'Facturado') setColorBg("bg-yellow-200");
        if(status === 'Cobrado') setColorBg("bg-gray-200");
        priority === false ? setBgPriority("bg-gray-200") : setBgPriority("bg-red-200")
    }, [])

    function handleChange(e) {
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value
        })
        if(e.target.value === 'Impresión Finalizada') setColorBg("bg-green-200");
        if(e.target.value === 'Entregado') setColorBg("bg-orange-200");
        if(e.target.value === 'Facturado') setColorBg("bg-yellow-200");
        if(e.target.value === 'Cobrado') setColorBg("bg-gray-200");
    }

    function handleEdit() {
		setEditing(true);
	}

    function handlePriority() {
        setPriority(!newPriority)
        !newPriority? setBgPriority("bg-red-200") : setBgPriority("bg-gray-200");
        dispatch(modifyPriority({orderId, priority: !newPriority}));
    }

    function handleSave() {
		dispatch(modifyOrderByAdmin({
           ...editedData,
            orderId,
            modelId
        })
        );
		setEditing(false);
	}

	function handleCancel() {
		setEditing(false);
	}

    return (
        <tr class=" bg-gray-50 dark:bg-gray-700 border-y-2">

                <td class="p-2 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {company}
                </td>
           
                <td class="p-2 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {name}
                </td>
             
                <td class="p-4 text-center text-sm font-semibold text-gray-500 whitespace-nowrap dark:text-white">
                    {editing ? (
                    <input
                    type="text"
                    name= "quantity"
                    value={editedData.quantity}
                    onChange={(e)=>handleChange(e)}
                    className="rounded-full w-20 text-center py-1"
                    />
                    ) : editedData.quantity
                    }
                    
                </td>
             
                <td class="p-4 text-center text-sm font-semibold text-gray-500 whitespace-nowrap dark:text-white">
                    {editing? 
                    <select name='material' defaultValue='Seleccione un material' onChange={(e)=>handleChange(e)} className="w-40 text-sm rounded-full py-1">
                            <option disabled value='Seleccione un material'>Elija el material</option>
                            <option value='PLA'>PLA</option>
                            <option value='PETG'>PETG</option>
                            <option value='ABS'>ABS</option>
                            <option value='FLEX' >FLEX</option>
                            <option value='NYLON' >NYLON</option>
                            <option value='RESINA ESTÁNDAR' >RESINA ESTÁNDAR</option>
                            <option value='RESINA ALTA RESISTENCIA' >RESINA ALTA RESISTENCIA</option>
                            <option value='RESINA BIOCOMPATIBLE' >RESINA BIOCOMPATIBLE</option>
                            <option value='OTRO' >OTRO</option>                     
                    </select> : editedData.material
                    }
                </td>
    
                <td class="p-4 text-center text-sm font-semibold text-gray-500 whitespace-nowrap dark:text-white">
                    {editing ? (
                        <input
                        type="text"
                        name= "color"
                        value={editedData.color}
                        onChange={(e)=>handleChange(e)}
                        className="rounded-full text-center w-40 py-1"
                        />
                        ) : editedData.color
                    }
                </td>
            
                <td className="p-4 text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				    {fechaSolicitud}
                </td>

                <td className="text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div className={`py-1 px-0 mr-5 rounded-full ${bgPriority} hover:bg-opacity-60 hover:text-gray-700`}>
                        {newPriority === true? <button onClick={(e)=>handlePriority(e)}>
                            Prioritario
                        </button>: <button onClick={(e)=>handlePriority(e)}>Dar Prioridad</button>} 
                    </div>
                </td>

                <td className="text-center text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div className={`py-1 px-0 rounded-full ${colorBg}`}>
                    {editing?
                        <select name='status' defaultValue='Seleccione un estado' onChange={(e)=>handleChange(e)} className= "py-0.5 text-sm rounded-lg" >
                        <option disabled value='Seleccione un estado'>Seleccione Estado</option>
                        <option value='Entregado' className="bg-orange-200">Entregado</option>
                        <option value='Facturado' className="bg-yellow-200">Facturado</option>
                        <option value='Cobrado' className="bg-gray-200">Cobrado</option>
                        </select>
                        : editedData.status
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

export default RowTableAdmin;
	