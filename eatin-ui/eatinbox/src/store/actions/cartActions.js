import axios from 'axios'
import * as urls from '../../../apiUrl'
import { axiosPostConfig } from '../../reusables/Functions/AxiosConfig'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const SEND_CART = 'SEND_CART'
export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item,
    }
}

export const removeFromCart = (pk) => {

    return {
        type: REMOVE_FROM_CART,
        pk,
    }
}

export const increaseCount = (pk) => {
    return {
        type: INCREASE_COUNT,
        pk,
    }
}

export const decreaseCount = (pk) => {
    return{
        type: DECREASE_COUNT,
        pk,
    }
}

export const setCurrentOrder = (data) => {
    return {
        type: SET_CURRENT_ORDER,
        currentOrder: data
    }
}

export const sendCart = (data) => async dispatch => {
    const url = urls.address + 'users/pastorders/'
    // dispatch(setCurrentOrder(null))

    try{
        const response = await axios(axiosPostConfig(url, data))
        if(response){
            // console.log(response.data)
            dispatch(setCurrentOrder(response.data))
        }
    }

    catch(err){
        console.log(err)
    }
        
}