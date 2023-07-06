import React from "react";
import stl1 from '../../assets/stl1.jpeg';
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyItemCart, getModels } from "../../actions/userActions";


const Card= ({name, material, price, image})=> {
    
    // let [quantity, setQuantity] = useState(0);
    let [input, setInput] = useState(0);
    let [color, setColor]= useState(0);

    const dispatch= useDispatch();
    let allModels= useSelector ((state)=> state.modelsByCompany); 
    let model= allModels.find(m=> m.name === name); 
    
    function handleClickDelete(e) {
        e.preventDefault();
        if(input>0) {
            setInput(prevInput => prevInput - 1);
           
            // dispatch(modifyItemCart({id: model.id , quantity: input}));
        }
        return
    }

    function handleClickAdd(e) {
        e.preventDefault();
        setInput(prevInput => prevInput + 1);
    
        // dispatch(modifyItemCart({id: model.id , quantity: input})); 
    }
    
    function handleChangeInput(e) {
        setInput(Number(e.target.value));
        // dispatch(modifyItemCart({id: model.id , quantity: input}))  esto no funcionaria, deberia mandar el dispatch una vez q tenga guardado el input
    }

    function handleChangeColor(e){
        setColor(e.target.value);
    }

    function handleConfirm(e) {
        e.preventDefault();
        dispatch(modifyItemCart({id: model.id , quantity: input, color: color}))
    }

    useEffect(() => {
        dispatch(getModels());
    }, [dispatch])


    return (

    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row sm:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className= 'md:flex flex-row w-full'>
            <img class=" object-cover w-full rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />  
            <div class="flex flex-col justify-between p-4 leading-normal w-2/3">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p class="mb-3 font-normal  text-gray-700 dark:text-gray-400">Material: {material}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: {price}</p>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center ">
                    <label className="md:mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">
                        Cantidad
                    </label>
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick= {e=> {handleClickDelete(e)}} >
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="quantity" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" value={input} onChange={handleChangeInput}/>
                        </div>
                    
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick= {e=> {handleClickAdd(e)}} >
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
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
                
                    <button className="mx-4 bg-lime-200 rounded-full p-2  font-light fot" type="button" onClick={handleConfirm}>Agregar</button>
            
                </div>
            </div>
    </div>
)};



export default Card;