import React from "react";
import  Card from '../Card-STL/Card';

export const Pagination= ({models})=> {
    console.log(models);
    return (
    
        <div>{rederMapeo(models)}</div>
        
       
    )
};

export const rederMapeo= (models)=> {
   
    return (
        <div className="flex flex-col items-center m-4">
            <div className="grid grid-flow-row justify-center p-6">
                {models.map((m)=> {
                    
                    return (
                        
                        <div key={m.id} className="pb-8">
                            <Card name= {m.name} material= {m.material} image= {m.image} price= {m.price} />
                        </div>
                        
                
                    )
                })}
                
            </div> 
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar con el Pedido</button>
        </div>
    )
};



