import React, { useState } from "react";
import { FiMenu, FiEdit } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDashboard } from "../../../actions/userActions";
import Dashboards from "../Dashboards";

const SideMenu= ()=> {
   const dispatch= useDispatch();
   const [isDrawerOpen, setIsDrawerOpen]= useState(false);

   function handleDrawer() {
      setIsDrawerOpen(!isDrawerOpen)
   }

   function handleClick(e, name) {
      e.preventDefault()
      console.log(name)
      dispatch(setDashboard(name))
   }

    return (
        <div className="flex flex-col px-14 py-36 bg-gradient-to-r from-customPink to-customPurple">
            <div className="px-6">
               <button className=" text-white flex flex-row items-center gap-2 justify-center text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button"  onClick={handleDrawer} >
                  <FiMenu /> <span>MENU TABLEROS</span>
               </button>
            </div>

            <div id="drawer-navigation" className= {`${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} pt-36 fixed top-0 place-items-baseline h-screen left-0 z-50 w-64 p-4 overflow-y-auto transition-transform bg-gray-700`} tabindex="-1" aria-labelledby="drawer-navigation-label">
               <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-300 uppercase dark:text-gray-400 pb-8 text-center">Menu Tableros</h5>
               <button type="button" className="mt-32 text-gray-300 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleDrawer}>
                  <svg  className="w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               </button>
               <div className="py-4 overflow-y-auto">
                     <ul className="space-y-2 font-medium">
                        <li>
                           <button className="flex items-center p-2 hover:text-gray-900 text-gray-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" type='button' onClick= {(e)=> handleClick(e, 'admin')}>
                              <RxDashboard className="text-gray-500 w-5 h-5" />
                              <span className="ml-3">Tablero Administrativo</span>
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center p-2 hover:text-gray-900 text-gray-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" type='button' onClick= {(e)=> handleClick(e, 'production')}>
                              
                              <MdProductionQuantityLimits className="w-5 h-5 text-gray-500"/>
                              <span className="flex-1 ml-3 whitespace-nowrap">Tablero de Producción</span>         
                           </button>
                        </li>
                        <li>
                           <button className="flex items-center p-2 hover:text-gray-900 text-gray-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" type='button' onClick= {(e)=> handleClick(e, 'modify')}>
                              <FiEdit className="w-5 h-5 text-gray-500"/>
                              <span className="flex-1 ml-3 whitespace-nowrap">Modificar Modelos</span>
                           </button>
                        </li>
                     
                        <li>
                           <button className="flex items-center p-2 text-gray-300 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group" type='button' onClick= {(e)=> handleClick(e, 'billing')}>
                              <FaFileInvoiceDollar className="w-5 h-5 text-gray-500" />
                              <span className="flex-1 ml-3 whitespace-nowrap">Tablero Facturaciones</span>
                           </button>
                        </li>
                     
                     </ul>
                  </div>
            </div>
            <div className= {isDrawerOpen ? 'opacity-60' : null}>
               <Dashboards />
            </div>
   

        </div>
    )
}

export default SideMenu;