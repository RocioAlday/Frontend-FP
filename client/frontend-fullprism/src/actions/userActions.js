import { LOGIN_USER, GET_MODELS, MODIFY_ITEM_CART, GET_MODEL_BY_NAME, CLEAR_FILTER, GENERATE_ORDER, MODIFY_ORDER, GET_CART, 
        DELETE_ITEM_ORDER, ERROR_CART_EMPTY, CLEAR_ERROR, CHANGE_STATUS, GET_ALL_MODELS, GET_ALL_ORDERS, GET_ORDERS_FOR_BILLING } from "./types";
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

export const getAllModels= ()=> {
    try {
        return async function(dispatch) {
            let allModels= await axios.get("http://localhost:3001/admin/allModels");
            
            return dispatch({
                type: GET_ALL_MODELS,
                payload: allModels.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const modifyModel= (newModel)=> {
    try{
        return async function() {
            let modifyModel= await axios.put("http://localhost:3001/admin/modifyModel", newModel);
          console.log(modifyModel.data);
        }
    } catch(error){
        console.log(error)
    }
}

export const getCartUser= async()=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
   
    try {
        let cartUser= await axios.get("http://localhost:3001/cart/cartByUser" ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
           console.log(cartUser);
            return cartUser.data
            
        }
        catch (error) {
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
                payload: addToCart,
            })
        }

    } catch (error) {
        console.log("Error Modifying Item in Cart", error)

    }

};

export const searchByName= (payload)=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/model/modelByName?name=${payload}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(response);
            dispatch({
                type: GET_MODEL_BY_NAME,
                payload: response.data,
            })
        } catch (error) {
            console.log("Error in Search Model By Name", error);
        }
    }
};

export const clearFilter= ()=> {
    return {
        type: CLEAR_FILTER
    }
};

export const generateOrder= ()=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/order/newOrder', {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(response);
            return dispatch({
                type: GENERATE_ORDER,
                payload: response.data,
            })
        } catch (error) {
            console.log("Error Creating Order", error);
        }
    }
}

export const modifyOrder= ()=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    return async function (dispatch) {
        try {
            const response = await axios.put('http://localhost:3001/order/modifyOrder', {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(response);
            return dispatch({
                type: MODIFY_ORDER,
                payload: response.data,
            })
        } catch (error) {
            if (error.response.data.message === 'No Products on Cart') {
                return dispatch({
                    type: ERROR_CART_EMPTY,
                    payload: error.response.data.message
                })
            }
            console.log("Error Modifying Order", error);
        }
    }
}

export const deleteItemOrder= ()=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    return async function (dispatch) {
        try {
            const response = await axios.delete('http://localhost:3001/order/deleteItem', 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            
            console.log(response);
            return dispatch({
                type: DELETE_ITEM_ORDER,
                payload: response.data,
            })
        } catch (error) {
            if (error.response.data.message === 'No Products on Cart') {
                return dispatch({
                    type: ERROR_CART_EMPTY,
                    payload: error.response.data.message
                })
            }
            console.log("Error deleting Order", error);
        }
    }

}

export const clearError= ()=> {
    return {
        type: CLEAR_ERROR
    }
}

export const changeStatus= (payload)=> {
    const cookie= new Cookies();
    const token= cookie.get("refreshToken");
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/order/changeStatus', {status: payload},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(response);
            return dispatch({
                type: CHANGE_STATUS,
                payload: response.data,
            })
        } catch (error) {
            console.log("Error Creating Order", error);
        }
    }
}

export const getAllOrders= ()=> {
    return async function(dispatch) {
        try{
            const orders= await axios.get("http://localhost:3001/admin/allOrders");
            return dispatch({
                type: GET_ALL_ORDERS,
                payload: orders.data
            })
        } catch(error) {
            console.log("Error Getting All Orders", error);
        }
    }
}

export const getOrdersForBilling= ()=> {
    return async function(dispatch) {
        try{
            const orders= await axios.get("http://localhost:3001/admin/ordersForBilling");
            return dispatch({
                type: GET_ORDERS_FOR_BILLING,
                payload: orders.data
            })
        } catch(error){
            console.log("Error Getting Orders For Billing", error);
        }
    }
}

// export const getOrder= ()=> {
//     const cookie= new Cookies();
//     const token= cookie.get("refreshToken");
//     return async function () {
//         try {
//             const response = await axios.get('http://localhost:3001/order/userOrder', {orderId},
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                   }
//             });
//             console.log(response);
          
//         } catch (error) {
//             console.log("Error Geting Order", error);
//         }
//     }
// }