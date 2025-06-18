/* eslint-disable no-unused-vars */
import {  configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./loadingReducer";
import productsReducer from "./productsReducer"
import loginReducer from "./loginReducer";
import cartReducer from "./cartReducer"



const store = configureStore({

    reducer:{

        loadingReducer,
        productsReducer,
        loginReducer,
        cartReducer,
       
        
      

    }

})

export default store