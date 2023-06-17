import stl1 from '../../assets/stl1.jpeg';
import stl2 from '../../assets/stl2.jpg';
import stl3 from '../../assets/stl3.jpeg';
import stl4 from '../../assets/stl4.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getModels } from '../../actions/userActions';
import { Pagination } from '../../components/Pagination/Pagination';

const Pedidos = ()=> {
    const dispatch= useDispatch();
    let allModels= useSelector((state)=> state.modelsByCompany);
    console.log(allModels);

    useEffect(()=> {
        const chargeModels= async()=> {
            await dispatch(getModels());
        };
        chargeModels();
        console.log(allModels)
    }, [dispatch]);



    return (
        <div className='grid grid-cols-4 '>
            <Pagination models= {allModels} />
        </div>
    
        

      
     

    )

};

export default Pedidos;