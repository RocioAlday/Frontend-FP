
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getModels, searchByName, clearFilter, generateOrder, clearError, userInfoData } from '../../actions/userActions';
import { Pagination } from '../../components/Pagination/Pagination';
import './pedidos.css';
import Loading from '../../components/Loading/Loading';

const Pedidos = ()=> {
    let history= useNavigate();
    let [input, setInput]= useState("");
    let [goToOrder, setGoToOrder]= useState(false);
    let order= useSelector((state)=> state.userOrder);
    const dataLogin= useSelector((state)=> state.userLogin);
    let userData= useSelector((state)=> state.userData);
    let allModels= useSelector((state)=> state.modelsByCompany); 
    let error= useSelector((state)=> state.error);
    const dispatch= useDispatch();
    // console.log(order);
    let searchModels= useSelector((state)=> state.searchModelsByName);

   
    useEffect(()=> {
       
        dispatch(getModels());
        dataLogin.hasOwnProperty('email') ? null : dispatch(userInfoData()) 
       
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
        allModels.length && (userData.hasOwnProperty('email') || dataLogin.hasOwnProperty('email') ) ?
        <div className='pt-20 bg-customBlue bg-opacity-90'>
            <div className='w-full md:flex md:flex-row md:place-items-start md:mt-8 md:justify-center sm:flex sm:flex-col sm:items-center'>
                <div className=" flex flex-col items-center m-6 gap-6 space-x-6 contenido-sticky">
                    <div className=' bg-customGray rounded-xl shadow-slate-400 shadow-sm-light py-4 px-6 pt-8'>
                    <div className='flex flex-row gap-2 '>
                        <div className="bg-white flex md:w-72 py-1 px-3 space-x-4 rounded-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input className="bg-white focus:outline-none border-none" type="text" placeholder="Nombre del modelo..."  value={input} onChange={handleChange}/>
                            
                        </div>
                        <button className="bg-customBlue2 py-1 px-3 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" type='button' onClick={handleSearch}>
                            Buscar
                        </button>
                    </div>
                    <div className="flex py-3 rounded-lg text-gray-500 font-semibold cursor-pointer">
                        <button className='hover:scale-110 transition duration-500 cursor-pointer' type='button' onClick={handleClearFilter}>Borrar Filtro</button>
                    </div>
                    </div>
                    <button className=" bg-customDarkGray bg-opacity-50 shadow-md shadow-slate-700 hover:bg-customGray hover:text-gray-700 text-white font-semibold py-2 px-4 rounded-xl" type='button' onClick={handleContinueToOrder}>Continuar con el Pedido</button>
                </div>
                <Pagination models= {searchModels.length>0 ? searchModels : allModels }/>
               
            </div>
            </div>
        : userData.hasOwnProperty('email') == false && dataLogin.hasOwnProperty('email') == false ?
            history('/login')
        :
        <div className=' bg-customBlue bg-opacity-90'>
            <Loading /> 
        </div>
        

    )

};

export default Pedidos;