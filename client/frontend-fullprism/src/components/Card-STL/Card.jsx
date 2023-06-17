import React from "react";
import stl1 from '../../assets/stl1.jpeg';
// import { NavLink } from "react-router-dom";

const Card= ({name, material, link, price})=> {
    console.log(name, material);
    return (
        <div className="p-6">
        <div class=" max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg w-full" src={stl1} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Material: {material}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden" >{link}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio: {price}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   Añadir a Pedido
                    
                </a>
            </div>
        </div>
        </div>
    )
};



export default Card;