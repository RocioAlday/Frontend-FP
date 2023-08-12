import { React } from "react";
import AdminDash from "./AdminDash";
import ProductionDash from "./ProductionDash";
import EditModels from "./EditModels";
import OrderForFact from "../../components/OrdersForFact/OrderForFac";
import { useSelector } from "react-redux";



const Dashboards= ()=> {
    let dashboardSeted= useSelector((state)=> state.dashboard); 

    
    return (
        <div>  
            {dashboardSeted === 'admin'  ? <AdminDash />    :
            dashboardSeted === 'billing' ? <OrderForFact /> :
            dashboardSeted === 'modify'  ? <EditModels />   :
            <ProductionDash /> 
            }
             
        </div>
    )
}

export default Dashboards;