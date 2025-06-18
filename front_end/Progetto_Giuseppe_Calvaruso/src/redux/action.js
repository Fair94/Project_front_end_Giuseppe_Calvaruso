/* eslint-disable no-unused-vars */
export const SHOW_LOADER='SHOW_LOADER'
export const HIDE_LOADER='HIDE_LOADER'
export const SET_PRODUCTS='SET_PRODUCTS'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ADD_TO_CART= 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const EMPTY_CART = 'EMPTY_CART'



// ACTION FOR PAGE LOADING OR FETCHING DATA.
export const showLoader = ()=>({

    type:SHOW_LOADER,

});


export const hideLoader = ()=>({

    type:HIDE_LOADER,

})


//ACTION FOR PRODUCTS

export const setProducts = (products) =>({

    type:'SET_PRODUCTS',
    payload:products,
})

//ACTION FOR LOGIN AND LOGOUT

export const userIn = (username,password) =>{

    return {

        type:"LOGIN",
        payload: {

            username: username,
            password: password

        }

    }
}

export const userOut = () =>{

    return{

        type:"LOGOUT",
        

    }
}

//ACTION FOR CART MANAGEMENT

export const itemIn = (product) =>({
    type:"ADD_TO_CART",
    payload: product,
})

export const itemOut = (productId) =>({
    type:"REMOVE_FROM_CART",
    payload: productId,

})

export const cartOut = (productId) =>({
    type:"EMPTY_CART",
    payload : productId,
})