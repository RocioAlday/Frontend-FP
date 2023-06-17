import {
    GET_MODELS,
    LOGIN_USER
} from '../actions/types';


const initialState= {
    allModels: [],
    allUsers: [],
    userLogin: [],
    modelsByCompany: [],
}

const rootReducer= (state= initialState, action)=> {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userLogin: [...state.userLogin, action.payload]
            }

        case GET_MODELS: 
        console.log('mi reducer', action.payload);
            return {
                ...state,
                modelsByCompany: action.payload
            }
        
    
        default:
            return state;
      }
  
};

export default rootReducer;
