/* eslint-disable no-unused-vars */

import { SHOW_LOADER,HIDE_LOADER } from "./action";

const initialState = {
    loading:false,
};

const loadingReducer =  (state = initialState,action)=>{

    switch(action.type){

        case SHOW_LOADER:
            return {...state, loading:true};

        case HIDE_LOADER:
            return {...state,loading:false}

        default :
        return state;

    }


}

export default loadingReducer