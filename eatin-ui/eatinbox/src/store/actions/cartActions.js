import axios from 'axios'
import * as urls from '../../../apiUrl'

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

export const sendCart = (data) => async dispatch => {
    const url = urls.address + 'users/pastorders/'

    try{
        const response = await axios.post(
            url, 
            data, 
            {headers: { 'content-type': 'application/json'}}
        )

        console.log(response)
    }

    catch(err){
        console.log(err.response)
    }
        
}