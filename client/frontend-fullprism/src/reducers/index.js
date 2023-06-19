import {
    GET_MODELS,
    LOGIN_USER,
    MODIFY_ITEM_CART
} from '../actions/types';


const initialState= {
    allModels: [],
    allUsers: [],
    userLogin: [],
    modelsByCompany: [],
    modelsInCart: []
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
        
        case MODIFY_ITEM_CART:
            return {
                ...state,
                modelsInCart: [action.payload]
            }

        default:
            return state;
      }
  
};

export default rootReducer;
