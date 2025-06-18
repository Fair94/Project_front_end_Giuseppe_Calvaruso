/* eslint-disable no-unused-vars */
import { ADD_TO_CART } from "./action";
import { REMOVE_FROM_CART } from "./action";
import { EMPTY_CART } from "./action";
const initialState = [];


const cartReducer = (state= initialState,action) => {

    switch(action.type){

        case ADD_TO_CART :{
            const item= action.payload;
            const existingItem = state.find( i => i.id === item.id);

            if(existingItem){
                return state.map(i=> i.id === item.id ?{...i,quantity: i.quantity+1}:i);
                
            } else{
                return[...state,{...item,quantity:1}];
            }
        }


        case REMOVE_FROM_CART:{
            const itemId = action.payload;
            const existingItem = state.find((i)=>i.id === itemId);

            if(existingItem){
                if(existingItem.quantity>1){
                    return state.map((i) =>
                        i.id === itemId?{...i,quantity: i.quantity-1}: i);
                } else{
                    return state.filter((i)=> i.id !== itemId)
                }
            }
            return state;
        }

        case EMPTY_CART:{

            return state.filter(i=>i.id !== action.payload)

        }




     default: return state;   
    }


}

export default cartReducer