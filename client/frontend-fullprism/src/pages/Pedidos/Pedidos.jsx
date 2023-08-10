
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getModels, searchByName, clearFilter, generateOrder, clearError } from '../../actions/userActions';
import { Pagination } from '../../components/Pagination/Pagination';
import './pedidos.css';

const Pedidos = ()=> {
    let history= useNavigate();
    let [input, setInput]= useState("");
    let [goToOrder, setGoToOrder]= useState(false);
    let order= useSelector((state)=> state.userOrder);
    let allModels= useSelector((state)=> state.modelsByCompany); 
    let error= useSelector((state)=> state.error);
    const dispatch= useDispatch();
    // console.log(order);
    let searchModels= useSelector((state)=> state.searchModelsByName);

   
    useEffect(()=> {
       
        dispatch(getModels());

    }, [dispatch]);


    function handleChange(e){
        setInput(e.target.value)
    };

    function handleSearch(e) {
        e.preventDefault();
        dispatch(searchByName(input));
        setInput("");
           
    };

    function handleClearFilter(e) {
        e.preventDefault();
        dispatch(clearFilter());
    }
   
    function handleContinueToOrder(e) {
        e.preventDefault();
        dispatch(generateOrder());
        setGoToOrder(true)
    }

   if (order && order.hasOwnProperty('models') && goToOrder) {
    dispatch(clearError());
    history('/orderDetail');
   } 

   
    return (
        allModels ?
        <div className='pt-20 bg-gradient-to-r from-customPink to-customPurple'>
            <div className='w-full md:flex md:flex-row md:place-items-start md:mt-8 md:justify-center sm:flex sm:flex-col sm:items-center'>
                <div class=" flex flex-col items-center m-6 gap-6 space-x-6 contenido-sticky">
                    <div className=' bg-customGray rounded-xl shadow-slate-400 shadow-sm-light p-4 pt-8'>
                    <div className='flex flex-row gap-2 '>
                        <div class="bg-white flex md:w-72 py-1 px-3 space-x-4 rounded-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input class="bg-white outline-none border-none" type="text" placeholder="Nombre del modelo..." value={input} onChange={handleChange}/>
                            
                        </div>
                        <button className="bg-blue-500 py-1 px-3 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" type='button' onClick={handleSearch}>
                            Buscar
                        </button>
                    </div>
                    <div class="flex py-3 rounded-lg text-gray-500 font-semibold cursor-pointer">
                        <button className='hover:scale-125 hover:ml-1 transition duration-500 cursor-pointer' type='button' onClick={handleClearFilter}>Borrar Filtro</button> {/* ver de hacerlo checkbox */}
                    </div>
                    </div>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' onClick={handleContinueToOrder}>Continuar con el Pedido</button>
                </div>
                <Pagination models= {searchModels.length>0 ? searchModels : allModels }/>
               
            </div>
            </div>
        : 'Cargando'

    )

};

export default Pedidos;