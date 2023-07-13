import {
    GET_MODELS,
    LOGIN_USER,
    LOGOUT_USER,
    MODIFY_ITEM_CART,
    GET_MODEL_BY_NAME,
    CLEAR_FILTER,
    GENERATE_ORDER,
    MODIFY_ORDER,
    GET_CART,
    DELETE_ITEM_ORDER,
    ERROR_CART_EMPTY,
    CLEAR_ERROR,
    CHANGE_STATUS,
    GET_ALL_MODELS,
    GET_ALL_ORDERS,
    GET_ORDERS_FOR_BILLING,
    GET_USER_ORDERS,
    GET_DOLARVALUE
} from '../actions/types';


const initialState= {
    allModels: [],
    allUsers: [],
    userLogin: [],
    modelsByCompany: [],
    modelsInCart: {},
    searchModelsByName: [],
    userOrder: {},
    cartUser: {},
    error: '',
    orderStatus: {},
    allOrders: [],
    ordersForBilling: [],
    ordersConfirmed: [],
    userOrdersOpen: [],
    dolarValue: 0
}

const rootReducer= (state= initialState, action)=> {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userLogin: [action.payload]
            }

        case GET_MODELS: 
        console.log('mi reducer', action.payload);
            return {
                ...state,
                modelsByCompany: action.payload
            }
        
        case LOGOUT_USER:
            return {
                ...state,
                userLogin: []
            }
        
        case GET_CART:
            return {
                ...state,
                cartUser: action.payload
            }

        case MODIFY_ITEM_CART:
            console.log(action.payload.data);
            return {
                ...state,
                modelsInCart: action.payload.data
            }
        case GET_MODEL_BY_NAME:
            return {
                ...state,
                searchModelsByName: action.payload
            }    

        case CLEAR_FILTER:
            return {
                ...state,
                searchModelsByName: []
            }

        case GENERATE_ORDER:
            console.log('REDUCER:', action.payload);
            return {
                ...state,
                userOrder: action.payload
            }

        case MODIFY_ORDER:
            return {
                ...state,
                userOrder: action.payload
            }
        
        case DELETE_ITEM_ORDER:
            return {
                ...state,
                userOrder: action.payload
            }
        
        case ERROR_CART_EMPTY:
            return {
                ...state,
                error: action.payload
            }
        
        case CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }
        
        case CHANGE_STATUS:
            return {
                ...state,
                orderStatus: action.payload
            }
        
        
        case GET_ALL_MODELS:
            return {
                ...state,
                allModels: action.payload
            }
        
        case GET_ALL_ORDERS:
            return {
                ...state,
                allOrders: action.payload
            }

        case GET_ORDERS_FOR_BILLING:
            return {
                ...state,
                ordersForBilling: action.payload
            }
        
        case GET_USER_ORDERS:
            return {
                ...state,
                userOrdersOpen: action.payload
            }

        case GET_DOLARVALUE:
            return {
                ...state,
                dolarValue: action.payload
            }
            
        default:
            return state;
      }
    
  
};

export default rootReducer;
