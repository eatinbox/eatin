import axios from 'axios'
import * as urls from '../../../apiUrl'

export const SET_MENU_LIST = 'SET_MENU_LIST'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const domain = urls.address

export const setMenuList = (menuList) => {
    return {
        type: SET_MENU_LIST,
        menuList
    }
}

export const getMenuList = () => {
    const url = domain + 'vendors/menulist/'

    return async dispatch => {
        try {
            let response = await axios.get(url)
            // console.log("this is ", response)
            dispatch(setMenuList(response.data))
            
        }

        catch(err) {
            // console.log('\n\nThis is the error\n\n', err)
        }
    } 
}

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