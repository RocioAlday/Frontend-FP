import React from "react";

const RowTableOrdersForBilling= ({id, models, totalBudget})=> {
    console.log(models);
    return (
  
        <tr class=" bg-gray-50 dark:bg-gray-700">
        {models.map((m)=> {
         return(
            <div className="flex flex-row items-center justify-center">
            <div className= 'mx-4 pr-14'>
            <td class="p-4 text-sm  text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
            {m.companyName}
            </td>
            </div>
          
           <div className=" w-full">
            <td class="p-4 gap-52 flex flex-row text-sm text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                <p>{m.name}</p> 
                <p>{m.OrderDetail.quantity}</p>
            </td>
            </div>
            
            </div>
         )
         })}
        

        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
            {totalBudget}
        </td>

        <td className="p-4 font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
       
            <button> FACT</button>
            
            
        </td>
    </tr>
    )
};

export default RowTableOrdersForBilling;