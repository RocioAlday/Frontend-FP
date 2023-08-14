import React, { useEffect } from "react";
import  Card from '../Card-STL/Card';
import { useState } from "react";
import { getDolarValue } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";



export const rederMapeo= (currentModels, dolarValue)=> {
   
    return (
        <div className="items-center m-4">
            {currentModels.length ?
            <div className=" justify-center p-6">
                {currentModels.map((m)=> {
                    
                    return (
                        
                        <div key={m.id} className="pb-8">
                            <Card name= {m.name} material= {m.material} image= {m.image} price= {m.price} dolar= {dolarValue.valor}/>
                        </div>
                        
                
                    )
                })}
                
            </div> : null
            } 
        </div>
    )
};


export const Pagination= ({models})=> {

    const [currentPage, setCurrentPage] = useState(1);
    const [modelPerPage, setModelsPerPage]= useState(8);
    const indexOfLastModel= currentPage * modelPerPage;
    const indexOfFirstModel= indexOfLastModel - modelPerPage;
    const currentModels= models.slice(indexOfFirstModel, indexOfLastModel);    
    let dolarValue= useSelector((state)=> state.dolarValue);
    let dispatch= useDispatch();

    useEffect(()=> {
        dispatch(getDolarValue());
    }, [])

    const pages = [];
    for (let i = 1; i <= Math.ceil(models.length / modelPerPage); i++) {
        pages.push(i);
    };

    const handleClick= (e)=> {
        setCurrentPage(Number(e.target.id));
    }

        
    return (
        <div>
        <div>{rederMapeo(currentModels, dolarValue)}</div>
        <div className="flex flex-row justify-center p-2 mb-10">
            <ul>
                {pages.map((number) => {
                    return (
                        <button
                            className=" text-xs bg-gray-200 border-2 py-2 px-3 mx-1 rounded-xl "
                            key={number}
                            onClick={handleClick}
                            id={number}>
                            {number}
                        </button>
                    );
                })}
            </ul>
        </div>
        </div>
       
    )
};




