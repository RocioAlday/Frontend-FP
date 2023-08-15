import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { modifyModel } from "../../actions/userActions";

const RowTable= ({id, name, material, link, image, price, companyName})=> {
	const dispatch= useDispatch();
    const [editing, setEditing]= useState(false);
    const [editedData, setEditedData]= useState({
		id,
		name,
		material,
		link,
		image,
		price,
		companyName
	});
	
	function handleEdit() {
		setEditing(true);
	}

	async function handleImageChange(e) {
		const file = e.target.files[0];
		const data= new FormData();
		data.append("file", file);
		data.append("upload_preset", "preset_fullprism");
		const res= await fetch(
			"https://api.cloudinary.com/v1_1/fullprism/image/upload", {
				method: "POST",
				body: data
			}
		);
		const response= await res.json();
		setEditedData({
			...editedData,
			[e.target.name]: response.secure_url
		});
	}

	function handleChange(e) {
		setEditedData({
			...editedData,
			[e.target.name]: e.target.value
		})
	}


	function handleSave() {
		dispatch(modifyModel(editedData));
		setEditing(false);
	}

	function handleCancel() {
		setEditing(false);
	}

    return (
        <tr className=" bg-gray-50 dark:bg-gray-700 text-center">
			<td className="p-4 text-sm justify-center flex flex-col items-center">
				{editing? (
					<div className="flex flex-col">
					<input className="text-xs" type="file" name="image" onChange= {handleImageChange} />
					
					</div>) : 
					<img className=" w-12" src= {editedData.image} />
				}
			 
			</td>
			<td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{editing ? (
				<input
				type="text"
				name= "name"
				value={editedData.name}
				onChange={handleChange}
				className="rounded-full py-1 w-40"
				/>
				) : editedData.name 
				}
			
			</td>
			<td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
				{editing? 
				<select name='material' defaultValue='Seleccione un material' onChange={handleChange} className="rounded-full py-1 w-44">
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
								
			<td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{editing?
				<select name='companyName' defaultValue='Seleccione un Cliente' onChange={handleChange} className="rounded-full py-1">
					<option disabled value='Seleccione un cliente'>Elija el cliente</option>
					<option value='Starbene'>Starbene</option>
					<option value='CEC'>CEC</option>
					<option value='Leistung'>Leistung</option>
					<option value='Tecme' >Tecme</option>
					<option value='E.Ligth' >E.Ligth</option>                   
				</select> : editedData.companyName
				}
			</td>

			<td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{ editing?
					<input 
					type="number"
					name= "price"
					value={editedData.price}
					onChange={handleChange}
					className="rounded-full py-1 w-24"
					/> :
				`US$ ${editedData.price}`
				}
			</td>

			<td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
				{editing?
					<input 
					type="text"
					name= "link"
					value={editedData.link}
					onChange={handleChange}
					className="rounded-full py-1 w-40"
					/> :
					editedData.link
				}
			</td>
			<td className="p-4 font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
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

export default RowTable;