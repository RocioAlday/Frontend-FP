import { LOGIN_USER, LOGOUT_USER, GET_MODELS, MODIFY_ITEM_CART, GET_MODEL_BY_NAME, CLEAR_FILTER, GENERATE_ORDER, MODIFY_ORDER, GET_CART, 
        DELETE_ITEM_ORDER, ERROR_CART_EMPTY, CLEAR_ERROR, CHANGE_STATUS, GET_ALL_MODELS, GET_ALL_ORDERS, GET_ORDERS_FOR_BILLING, 
        GET_USER_ORDERS, GET_DOLARVALUE, GET_DATA_USER_FOR_BILL, ORDERS_FOR_CHANGE_STATUS, ORDERS_LIST, USER_DATA, FILTER_BY_STATUS, 
        GET_DATA_BUDGET, FILTER_USER_ORDERS_BY_STATUS, SETDASH } from "./types";
import axios from 'axios';
import { getTokenInCookies, setTokenInCookies, showNotification } from "../utils/functions";

export const registerUser= (user)=> {
    try {
        return async function(){
            let dataRegister= await axios.post("http://localhost:3001/user/register" , user);
            console.log(dataRegister);
            dataRegister.status === 201 && showNotification('Usuario registrado con éxito!', 'BOTTOM_CENTER')
        }
        
    } catch (error){
        console.log(error);
    }
};

export const logOut= ()=> {
  
    const token= getTokenInCookies();
    try{
        return async function(dispatch){
            let dataLogout= await axios.get("http://localhost:3001/user/logout" ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            console.log(dataLogout.data);
            setTokenInCookies("");
            return dispatch({
                type: LOGOUT_USER
            })
        }
    } catch(error){
        console.log('Error in user Logout', error)
    }
};

export const loginUser = (user) => {

    try{
        return async function(dispatch){
            let dataLogin= await axios.post("http://localhost:3001/user/login" , user);
            console.log(dataLogin);
            setTokenInCookies(dataLogin.data.refreshToken);
           
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
    const token= getTokenInCookies();
    try {
        return async function(dispatch) {
            let modelsByCompany= await axios.get("http://localhost:3001/model/companyModels" ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });

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
        }
    } catch(error){
        console.log(error)
    }
}

export const getCartUser= ()=> {
    const token= getTokenInCookies();
   
    try {
        return async function(dispatch) {
        let cartUser= await axios.get("http://localhost:3001/cart/cartByUser" ,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(cartUser);
            return dispatch({
                type: GET_CART,
                payload: cartUser.data
            })
        }      
    }
        catch (error) {
        console.log(error)
    }

} 


export const modifyItemCart = (payload) => {
    const token= getTokenInCookies();
    
    try { 
        return async function(dispatch){
            let addToCart = await axios.put("http://localhost:3001/cart/modifyCart" ,{product: payload},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            

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
    const token= getTokenInCookies();
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/model/modelByName?name=${payload}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
      
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
    const token= getTokenInCookies();
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/order/newOrder', {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
        
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
    const token= getTokenInCookies();
    return async function (dispatch) {
        try {
            const response = await axios.put('http://localhost:3001/order/modifyOrder', {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
    
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

export const addToOrderConfirmed= (payload)=> {
    const token= getTokenInCookies();
  
    return async function () {
        try {
            const response = await axios.post('http://localhost:3001/order/orderConfirmed', payload, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            
            return response.data;
            
        } catch (error) {
            console.log("Error adding to Order Confirmed", error);
        }
    }
}

export const deleteItemOrder= ()=> {
    const token= getTokenInCookies();
    return async function (dispatch) {
        try {
            const response = await axios.delete('http://localhost:3001/order/deleteItem', 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            
      
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
            console.log("Error deleting Item in Order", error);
        }
    }

}

export const deleteOrder= (payload)=> {
    const token= getTokenInCookies();
    
    return async function () {
        try {
            const response = await axios.put('http://localhost:3001/order/deleteOrder', payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
      
            return response.data;
        
        } catch (error) {
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
    const token= getTokenInCookies();
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/order/changeStatus', {status: payload},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
        
            return dispatch({
                type: CHANGE_STATUS,
                payload: response.data,
            })
        } catch (error) {
            console.log("Error Changing status Order", error);
        }
    }
}

export const changeStatusItemOrder= (payload)=> {
    const token= getTokenInCookies();
    return async function () {
        try {
            const response = await axios.put('http://localhost:3001/admin/modifyStatusOrderDetail', payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
        console.log(response)
            
        } catch (error) {
            console.log("Error Changing item in Order", error);
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

 export const getUserOrders= ()=> {
    const token= getTokenInCookies();
     return async function (dispatch) {
         try {
             const response = await axios.get('http://localhost:3001/order/openOrders',
             {
                 headers: {
                     Authorization: `Bearer ${token}`
                   }
             });
         
             return dispatch({
                type: GET_USER_ORDERS,
                payload: response.data
            })
         } catch (error) {
             console.log("Error Geting Order", error);
         }
     }
}

export const getDolarValue= ()=> {
    return async function (dispatch) {  
        try{
            const dolar= await axios.get('http://localhost:3001/model/dolarValue');
    
            return dispatch({
                type: GET_DOLARVALUE,
                payload: dolar.data
            })

        } catch(error) {
            console.log('Error geting dolar value', error)
        }
    }
}

export const getDataForBill= (payload)=> {
    const token= getTokenInCookies();
    return async function (dispatch) {
        try{
          
            const userInfo= await axios.get(`http://localhost:3001/user/dataUserForBill?userId=${payload}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            return dispatch({
                type: GET_DATA_USER_FOR_BILL,
                payload: userInfo.data
            })
        } catch(error) {
            console.log('Error geting user info for billing', error)
        }
    }
}


export const changeConfirmedOrderStatus= (payload)=> {
    const token= getTokenInCookies();
    return async function (dispatch) {
        try{
            const orderChanged= await axios.post('http://localhost:3001/order/changeConfirmOrderStatus', payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });

            dispatch(getOrdersForBilling())
            
          
        } catch (error) {
            console.log('Error changing status of confirmed order', error)
        }
    }
}

export const ordersForChangeStatus= (payload)=> {
    return async function(dispatch) {
        try {
            return dispatch({
                type: ORDERS_FOR_CHANGE_STATUS,
                payload: payload
            })
        } catch(error) {
            console.log('Error adding order on change status list')
        }
    }
}

export const ordersList= (payload)=> {
    return {
        type: ORDERS_LIST,
        payload: payload
    }
};

export const modifyOrderByAdmin= (payload)=> {
    return async function() {
        try {
          console.log(payload);
            const modifyOrder= await axios.put('http://localhost:3001/admin/modifyOrderDetail', payload);
         
          
        } catch (error) {
            console.log('Error modifyng order detail in dashboard admin')
        }
    }
}

export const modifyPriority= (payload)=> {
    return async function() {
        try {
            const modifyPriority= await axios.put('http://localhost:3001/admin/modifyPriority', payload);

        } catch (error) {
            console.log('Error modifyng priority in order')
        }
    }
}

export const userInfoData= ()=> {
    const token= getTokenInCookies();
   
    return async function(dispatch) {
        if(token) {
            try {
                const userData= await axios.get('http://localhost:3001/user/userData',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(userData);
                return dispatch({
                    type: USER_DATA,
                    payload: userData.data
                })
            } catch(error) {
                console.log('Error getting user info')
            }
        } return
    }
}

export const filterByStatus= (payload)=> {
    return {
        type: FILTER_BY_STATUS,
        payload
    }
}

export const dataForBudget= (payload) => {
    const token= getTokenInCookies();
    console.log(token);
    return async function (dispatch) {
        try{
            const result= await axios.post('http://localhost:3001/order/dataForBudget', payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(result.data)
            return dispatch({
                type: GET_DATA_BUDGET,
                payload: result.data
            })
          
        } catch (error) {
            console.log('Error geting data for budget generation', error)
        }
    }

}


export function FilterUserOrdersByStatus(payload){ 
    return {
        type: FILTER_USER_ORDERS_BY_STATUS,
        payload: payload
    };
};

export function setDashboard(payload) {
    return {
        type: SETDASH,
        payload: payload
    }
};


export function sendContactEmail(payload){
    return async function () {
        try{
            const response= await axios.post('http://localhost:3001/user/sendContactEmail', payload);
            
            console.log(response.data)
            response.status === 200 && showNotification('Tu consulta fue enviada con éxito!', 'TOP_LEFT')
          
        } catch (error) {
            console.log('Error sending contact Email', error)
        }
    }
}
