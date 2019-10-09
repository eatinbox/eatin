export const SET_PAST_ORDERS = 'SET_PAST_ORDERS';
import axios from 'axios'

import * as urls from '../../../apiUrl'

export const setPastOrders = (orderList) => {
    return {
        type: SET_PAST_ORDERS,
        orderList,
    }
}

export const getPastOrders = () => dispatch => {
    const url = urls.address + 'users/pastorders/'

    interval = setInterval(async () => {

        try {
            let response = await axios.get(url)
            // console.log(response)

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