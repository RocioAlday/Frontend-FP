
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getModels, searchByName, clearFilter } from '../../actions/userActions';
import { Pagination } from '../../components/Pagination/Pagination';

const Pedidos = ()=> {

    let [input, setInput]= useState("");
    let allModels= useSelector((state)=> state.modelsByCompany); 
    const dispatch= useDispatch();

    let searchModels= useSelector((state)=> state.searchModelsByName);
    console.log(allModels);

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
    }


    return (
        
            <div className='flex flex-col items-center '>
                <div class=" flex items-center mt-6 p-6 space-x-6">
                    <div className=' bg-white rounded-xl shadow-lg p-4 pt-8'>
                    <div className='flex gap-2 '>
                        <div class="bg-gray-100 flex w-full md:w-72 py-1 px-3 space-x-4 rounded-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input class="bg-gray-100 outline-none border-none" type="text" placeholder="Nombre del modelo..." value={input} onChange={handleChange}/>
                            
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
                <Pagination models= {searchModels.length>0 ? searchModels : allModels  }/>
               
            </div>
            
        
        
    
        

      
     

    )

};

export default Pedidos;