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
    GET_DOLARVALUE,
    GET_DATA_USER_FOR_BILL,
    ORDERS_FOR_CHANGE_STATUS,
    ORDERS_LIST,
    USER_DATA,
    FILTER_BY_STATUS,
    GET_DATA_BUDGET,
    FILTER_USER_ORDERS_BY_STATUS,
    SETDASH,
    ERROR_MESSAGE,
    CLEAR_ERR_MSG
} from '../actions/types';


const initialState= {
    allModels: [],
    allUsers: [],
    userLogin: {},
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
    dolarValue: 0,
    userDataForBilling: {},
    ordersForChangeStatus: [],
    ordersList: [],
    userData: {},
    ordersCopy: [],
    dataBudget: {},
    filteredOrdersByStatus: [],
    dashboard: '',
    statusChanged: {},
    errorMessage: ''
}

const rootReducer= (state= initialState, action)=> {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userLogin: action.payload
            }

        case GET_MODELS: 
            return {
                ...state,
                modelsByCompany: action.payload
            }
        
        case LOGOUT_USER:
            return {
                ...state,
                userLogin: {},
                userData: {}
            }
        
        case GET_CART:
            console.log(action.payload)
            return {
                ...state,
                cartUser: action.payload
            }

        case MODIFY_ITEM_CART:
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
            console.log(action.payload)
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
            let dateOrder= [];
            let orders= action.payload;

            dateOrder = orders.sort(function(a, b) {
                    return new Date(b.fechaSolicitud) - new Date(a.fechaSolicitud)
                })

            return {
                ...state,
                userOrdersOpen: dateOrder
            }

        case GET_DOLARVALUE:
            return {
                ...state,
                dolarValue: action.payload
            }
        
        case GET_DATA_USER_FOR_BILL:
            return {
                ...state,
                userDataForBilling: action.payload
            }
        
        case ORDERS_FOR_CHANGE_STATUS:
            return {
                ...state,
                ordersForChangeStatus: action.payload
            }
        
        case ORDERS_LIST:
            if(action.payload.checked) {
                let findOrder= state.ordersList.find(o=> o.id === action.payload.orderId);
                if(!findOrder){
                    return {
                        ...state,
                        ordersList: [...state.ordersList, action.payload]
                    }
               
                }} else {

                    let list= state.ordersList.filter(o=> o.id !== action.payload.orderId);
                    return {
                        ...state,
                        ordersList: list
                    }}
    
        case USER_DATA:
            return {
                ...state,
                userData: action.payload
            }

        case FILTER_BY_STATUS:
            const status= action.payload;
            console.log(status);
            console.log(state.allOrders);
            if(status === 'todos'){
                return {
                    ...state,
                    ordersCopy: state.allOrders
                }
            } else {
                let detailModels= [];
                let ordersFiltered=[];
                state.allOrders.map(o=> {
                    let filter= o.detailModels.filter(m => m.status === status);
                    if (filter) {
                        detailModels= [...filter];
                    };
                
                    if (detailModels.length) { 
                        let order= {
                            fechaSolicitud: o.fechaSolicitud,
                            orderId: o.orderId,
                            status: o.status,
                            totalBudget: o.totalBudget,
                            userId: o.userId,
                            detailModels: detailModels
                        }  
                        ordersFiltered.push(order)
                    } 
                });
                console.log(ordersFiltered);
                return{
                    ...state,
                    ordersCopy: ordersFiltered,
                }
            } 

        case GET_DATA_BUDGET:
            return {
                ...state,
                dataBudget: action.payload
            }

        case FILTER_USER_ORDERS_BY_STATUS:
            const statusReceived= action.payload;
            let filteredOrdersCopy= [];

            function filterStatus(status, param, filteredOrdersCopy, statusValue) {
                if (status[param]) {
                    const filterByStatus = state.userOrdersOpen.filter(o => o.status === statusValue);
                    filteredOrdersCopy.push(...filterByStatus);
                } else if (!status[statusValue]) {
                    const eliminateFilterByStatus = filteredOrdersCopy.length ?
                        filteredOrdersCopy.filter(o => o.status !== statusValue) :
                        state.userOrdersOpen.filter(o => o.status !== statusValue);
                    filteredOrdersCopy = eliminateFilterByStatus;
                }
            }
            
            filterStatus(statusReceived, 'printed' , filteredOrdersCopy, 'Impresión Finalizada');
            filterStatus(statusReceived, 'delivered', filteredOrdersCopy, 'Entregado');
            filterStatus(statusReceived, 'billed', filteredOrdersCopy, 'Facturado');
            filterStatus(statusReceived, 'confirmed', filteredOrdersCopy, 'Confirmado');
            

            return {
                ...state,
                filteredOrdersByStatus: filteredOrdersCopy
            }

        case SETDASH:
            return {
                ...state,
                dashboard: action.payload
            }
        
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        
        case CLEAR_ERR_MSG:
            return {
                ...state,
                errorMessage: ''
            }

        default:
            return state;
      }

    
  
};

export default rootReducer;
