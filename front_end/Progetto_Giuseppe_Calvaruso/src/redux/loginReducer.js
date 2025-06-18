/* eslint-disable no-unused-vars */

import { LOGIN,LOGOUT } from "./action";

const initialState = {
     isLogged: false,
     user: null

};

const loginReducer = (state=initialState,action)=>{

        switch(action.type){

            case LOGIN:
                return{
                    ...state,
                    isLogged:true,
                    user: {
                        username : action.payload.username,
                        
                    }
                };
             case LOGOUT:
                 return{
                    ...state,
                    isLogged:false,
                    user:null
                 }
            default:return state;
                
               
        }
}

export default loginReducer