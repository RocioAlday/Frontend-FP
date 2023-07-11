import React from "react";
import axios from 'axios';
import Cookies from "universal-cookie";
import Home from "../../pages/Home/Home";
import { useEffect } from "react";
import { logOut } from "../../actions/userActions";
import { useDispatch } from "react-redux";


const Logout = ()=> {
    const dispatch = useDispatch();
    //dar un alert
    useEffect (()=> {
       dispatch(logOut());
      }, []);

    
    return (
        <div>
            <Home />
        </div>
    )
};

export default Logout;


