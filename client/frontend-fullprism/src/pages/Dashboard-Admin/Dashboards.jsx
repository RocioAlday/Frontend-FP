import { React, useState } from "react";
import AdminDash from "./AdminDash";
import SideMenu from "./SideMenu/SideMenu";
import ProductionDash from "./ProductionDash";
import EditModels from "./EditModels";
import OrderForFact from "../../components/OrdersForFact/OrderForFac";
import { useSelector } from "react-redux";



const Dashboards= ()=> {
    let dashboardSeted= useSelector((state)=> state.dashboard); 

    
    return (
        <div className=" bg-gradient-to-r from-customPink to-customPurple py-36 ">
            <div className="flex flex-col mx-14">
                <div className='px-6 flex items-start justify-start'>
                     <SideMenu />  
                </div>
                {dashboardSeted === 'admin'   ? <AdminDash />    :
                dashboardSeted === 'billing' ? <OrderForFact /> :
                dashboardSeted === 'modify'  ? <EditModels />   :
                <ProductionDash /> 
                }
            
            </div>
        </div>
    )
}

export default Dashboards;