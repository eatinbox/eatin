import axios from 'axios'

import * as urls from '../../../apiUrl'
import { axiosGetConfig } from '../../reusables/Functions/AxiosConfig';

export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'
export const SET_PAST_ORDERS = 'SET_PAST_ORDERS';

export const setPastOrders = (orderList) => {
    return {
        type: SET_PAST_ORDERS,
        orderList,
    }
}

export const setCurrentOrder = (data) => {
    return {
        type: SET_CURRENT_ORDER,
        currentOrder: data
    }
}

export const getPastOrders = (user) => dispatch => {
    const url = urls.address + 'users/pastorders/'

    const interval = setInterval(async () => {
        try {
            let response = await axios(axiosGetConfig(url, user))
            
            console.log(response)

            if(response){
                dispatch(setPastOrders(response.data))
                clearInterval(interval)
            }
        }

        catch(err) {
            console.log("This is error", err)
            clearInterval(interval)
        }      
    }, 1000)
}