import React from "react";
import axios from 'axios';
import Cookies from "universal-cookie";
import Home from "../../pages/Home/Home";
import { useEffect } from "react";

export const logout= async ()=> {
    try{
        let cookies= new Cookies();
        const token= cookies.get("refreshToken");

     
        let dataLogout= await axios.get("http://localhost:3001/user/logout" ,{
            headers: {
                Authorization: `Bearer ${token}`
              }
        }); //falta mandarle acá x headers las cookies, lo espera el back
        console.log(dataLogout.data.refreshToken);
        cookies.set("refreshToken", "");
    } catch(error){
        console.log('Error in user Logout', error)
    }
};




const Logout = ()=> {
    //dar un alert
    useEffect (()=> {
       logout();
      }, []);

    
    return (
        <div>
            <Home />
        </div>
    )
};

export default Logout;


