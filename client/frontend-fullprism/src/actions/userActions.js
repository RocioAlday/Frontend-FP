import { LOGIN_USER, LOGOUT_USER, GET_MODELS, MODIFY_ITEM_CART } from "./types";
import axios from 'axios';
import Cookies from "universal-cookie";

export const registerUser= (user)=> {
    try {
        return async function(){
            let dataRegister= await axios.post("http://localhost:3001/user/register" , user);
            console.log(dataRegister);
        
        }
    } catch (error){
        console.log(error);
    }
};


// export const logOutUser= (user) => {
//     let cookie= new Cookies();
//     try {
//         return async function(){
//             let dataLogout= await axios.post("http://localhost:3001/user/logout" , user, cookie); //falta mandarle acá x headers las cookies, lo espera el back
//             console.log(dataLogout.data.refreshToken);
//             cookie.set("refreshToken", "");
           
//         }
//     } catch(error) {
//         console.log('Error in user Logout')
//     }
// };

export const loginUser = (user) => {
   let cookie = new Cookies();
    try{
        console.log('EN ACTIONS:', user);

        return async function(dispatch){
            let dataLogin= await axios.post("http://localhost:3001/user/login" , user);
            console.log(dataLogin);
            cookie.set("refreshToken", dataLogin.data.refreshToken);
            return dispatch({
                type: LOGIN_USER,
                payload: dataLogin.data,
            })
        }
    } catch(error) {
        console.log("error In LOGIN", error)
    }
};

export const getModels= ()=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    console.log('ACTIONFORGETMODELS:' , token);
    try {
        return async function(dispatch) {
            let modelsByCompany= await axios.get("http://localhost:3001/model/companyModels" ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(modelsByCompany);
            return dispatch({
                type: GET_MODELS,
                payload: modelsByCompany.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}





export const modifyItemCart = (payload) => {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    
    try { 
        return async function(dispatch){
            let addToCart = await axios.put("http://localhost:3001/cart/modifyCart" ,{product: payload},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            
            console.log("console.log" ,addToCart)

            return dispatch({
                type: MODIFY_ITEM_CART,
                payload: addToCart.data,
            })
        }

    } catch (error) {
        console.log("Error Modifying Item in Cart", error)

    }

}
