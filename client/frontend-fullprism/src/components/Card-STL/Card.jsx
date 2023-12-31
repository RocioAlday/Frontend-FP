import React from "react";
import stl1 from '../../assets/stl1.jpeg';
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyItemCart, getModels } from "../../actions/userActions";
import { formateNumber, showNotification } from '../../utils/functions';
import { toast } from 'react-toastify';

const Card= ({name, material, price, image, dolar})=> {
    let [input, setInput] = useState(0);
    let [color, setColor]= useState(0);
    let [editAdd, setEditAdd]= useState(false);

    const dispatch= useDispatch();
    let allModels= useSelector ((state)=> state.modelsByCompany); 
    let model= allModels.find(m=> m.name === name); 

   
    function handleClickDelete(e) {
        e.preventDefault();
        if(input>0) {
            setInput(prevInput => prevInput - 1);
        }
        return
    }

    function handleClickAdd(e) {
        e.preventDefault();
        setInput(prevInput => prevInput + 1);
    }
    
    function handleChangeInput(e) {
        const parsedValue = parseInt(e.target.value, 10);
        if (Number(parsedValue) && parsedValue > 0) {
            setInput(e.target.value);
        } else {
            setInput(0)
        }
    }

    function handleChangeColor(e){
        setColor(e.target.value);
    }

    function handleConfirm(e) {
        e.preventDefault();
        dispatch(modifyItemCart({id: model.id , quantity: input, color: color}));
        showNotification('Pieza Agregada al Pedido!', 'BOTTOM_RIGHT');
        setEditAdd(true);
    }


    useEffect(() => {
        dispatch(getModels());
    }, [dispatch])


    return (

        <div className="flex flex-col items-center  bg-gray-50 shadow-lg shadow-gray-700 rounded-lg md:flex-row sm:flex-row md:max-w-xxl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className= 'md:flex md:flex-row sm:flex sm:flex-col w-full'>
            <img className=" object-cover w-full rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />  
            <div className="flex flex-col justify-between p-4 leading-normal w-2/3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">Material: {material}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio:&nbsp;&nbsp; ${formateNumber(price*dolar)}</p>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center ">
                    <label className="md:mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">
                        Cantidad
                    </label>
                    <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick= {e=> {handleClickDelete(e)}} >
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input id="quantity" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" value={input} onChange={handleChangeInput}/>
                        </div>
                    
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick= {e=> {handleClickAdd(e)}} >
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="p-6">
                            <select className="w-17 text-sm text-center rounded-lg border border-gray-300 bg-gray-50 p-1" name='color' defaultValue='Seleccione un color' onChange={handleChangeColor}>
                                <option disabled value='Seleccione un color'>Seleccione Color</option>
                                <option value='Negro'>Negro</option>
                                <option value='Gris'>Gris</option>
                                <option value='Blanco'>Blanco</option>
                                <option value='Plateado'>Plateado</option>
                                <option value='Rojo'>Rojo</option>
                                <option value='Naranja'>Naranja</option>
                                <option value='Marrón'>Marrón</option>
                                <option value='Amarillo'>Amarillo</option>
                                <option value='Amarillo'>Otro</option>
                            </select>
                        </div>
                    </div>
                
                    <button className= { !editAdd ? "mx-4 bg-customPink text-white rounded-full py-2 px-3 text-sm hover:bg-customPink hover:bg-opacity-50 hover:text-gray-700 hover:scale-110 transition duration-600" : "mx-4 bg-gray-300 rounded-full py-2 px-3 font-light hover:bg-gray-400 hover:text-gray-100"} type="button" onClick={handleConfirm}>{ editAdd ? 'Modificar' : 'AGREGAR' } </button>
            
                </div>
            </div>
    </div>
)};




export default Card;