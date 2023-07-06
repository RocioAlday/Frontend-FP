import React, { useEffect } from "react";
import  Card from '../Card-STL/Card';
import { useState } from "react";
import { getModels } from "../../actions/userActions";
import { useDispatch } from "react-redux";


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
        </div>
    )
};


export const Pagination= ({models})=> {

    const [currentPage, setCurrentPage] = useState(1);
    const [modelPerPage, setModelsPerPage]= useState(8);
    const indexOfLastModel= currentPage * modelPerPage;
    const indexOfFirstModel= indexOfLastModel - modelPerPage;
    const currentModels= models.slice(indexOfFirstModel, indexOfLastModel);    
    let dispatch= useDispatch();

    useEffect(()=> {
        dispatch(getModels());
    }, [])

    const pages = [];
    for (let i = 1; i <= Math.ceil(models.length / modelPerPage); i++) {
        pages.push(i);
    };
    console.log(pages);

    const handleClick= (e)=> {
        setCurrentPage(Number(e.target.id));
    }

        
    return (
        <div>
        <div>{rederMapeo(currentModels)}</div>
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




