import React from "react";
import { useEffect } from "react";
import { logOut } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import Login from "../../pages/Login/Login";


const Logout = ()=> {
    const dispatch = useDispatch();
    //dar un alert
    useEffect (()=> {
       dispatch(logOut());
      }, []);

    
    return (
        <div>
            <Login />
        </div>
    )
};

export default Logout;


