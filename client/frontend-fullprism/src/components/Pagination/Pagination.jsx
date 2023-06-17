import React from "react";
import  Card from '../Card-STL/Card';

export const Pagination= ({models})=> {
    console.log(models);
    return (
    
        <div>{rederMapeo(models)}</div>
        
       
    )
};

export const rederMapeo= (models)=> {
    console.log('MAPEO', models);
    return models.map((m)=> {
        console.log(m.name);
        return (
            <div key={m.id}>
                <Card name= {m.name} material= {m.material} link= {m.link} price= {m.price} />
            </div>
        )
    })
};



