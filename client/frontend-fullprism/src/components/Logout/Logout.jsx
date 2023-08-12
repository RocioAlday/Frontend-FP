import React from "react";
import { useEffect } from "react";
import { logOut } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../pages/Login/Login";


const Logout = ()=> {
    const dispatch = useDispatch();
    let userLogin= useSelector((state)=> state.userLogin);
    console.log(userLogin)
    useEffect (()=> {
       dispatch(logOut());
      }, []);

    
    return (
        <div>
            { userInfo.hasOwnProperty('email') || userLogin.hasOwnProperty('email') ? null :  <Login /> }
        </div>
    )
};

export default Logout;


