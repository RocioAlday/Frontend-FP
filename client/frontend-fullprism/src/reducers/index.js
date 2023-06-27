import {
    GET_MODELS,
    LOGIN_USER,
    MODIFY_ITEM_CART,
    GET_MODEL_BY_NAME,
    CLEAR_FILTER,
    GENERATE_ORDER,
    MODIFY_ORDER,
    GET_CART
} from '../actions/types';


const initialState= {
    allModels: [],
    allUsers: [],
    userLogin: [],
    modelsByCompany: [],
    modelsInCart: {},
    searchModelsByName: [],
    userOrder: {},
    cartUser: {}
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

        default:
            return state;
      }
  
};

export default rootReducer;
