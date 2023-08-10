import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataForBill, ordersList } from "../../actions/userActions";



const RowTableOrdersForBilling= ({id, userId, index, models, dolar, observations})=> {
    console.log(models);
    console.log(id);
    const dispatch= useDispatch();
    let dataUserCompany= useSelector((state)=> state.userDataForBilling)
    const [checked, setChecked] = useState(false);
    console.log(checked);
    

    function handleCheck(e) {
        dispatch(ordersList({checked: !checked, orderId: id, status: 'Facturado'}));
        setChecked(!checked);
    }

    useEffect(()=> {
        dispatch(getDataForBill(userId));
    }, [])
    
    return (
        <tr className= {!checked? " bg-gray-50 dark:bg-gray-700 border-y-2 border-stone-300" :  "bg-green-100 dark:bg-green-300 border-y-2 border-stone-300"}>
            <td className="p-4 pl-4 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                {index}
            </td>
            <td className="p-4 pl-2 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                {dataUserCompany.name}
            </td>
            <td className="p-4 pl-2 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                {dataUserCompany.cuit}
            </td>
            <td className="p-4 pl-2 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                {dataUserCompany.condicionImpositiva}
            </td>
            {models.map((m)=> {
            return(
                <div className="flex flex-row ">
                    <div className="w-full items-center justify-center">
                        <td className="p-4 pl-7 text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {m.name}
                    
                        </td>
                    </div>
                    <div className="w-full items-center justify-center">
                        <td className="p-4 pl-20 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {m.quantity}
                        </td>
                    </div>
                    <div className="w-full items-center justify-center">
                        <td className="p-4 pl-10 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {m.price*dolar} 
                        
                        </td>
                    </div>
                </div>
            )
            })}

            <td className="p-4 pl-2 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                {observations}
            </td>
            
            <td className="p-4 font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400">
                <input
                    type="checkbox"
                    id= {id}
                    name='billed'
                    checked= {checked}
                    onChange={(e)=> handleCheck(e)}
                >
                </input> 
            </td>
        </tr>
    )
};

export default RowTableOrdersForBilling;