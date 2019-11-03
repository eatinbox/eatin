import axios from 'axios'

import * as urls from '../../../apiUrl'
import { axiosPostConfig } from '../../reusables/Functions/AxiosConfig'
import {setCurrentOrder} from '../actions/orderActions'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const SEND_CART = 'SEND_CART'


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

export const sendCart = (data, user) => async dispatch => {
    const url = urls.address + 'users/pastorders/'
    // dispatch(setCurrentOrder(null))

    const sendData = {
        ...data,
        is_user: 'customer',
    }

    console.log("data", data)

    try{
        const response = await axios.post(url, sendData, { 
            headers: { 
                'content-type': 'application/json',
                "Authorization": "JWT " + user.token
            },           
        })

        if(response){
            console.log("Did order place", response.data)
            dispatch(setCurrentOrder(response.data))
        }
    }

    catch(err){
        console.log(err)
    }
        
}