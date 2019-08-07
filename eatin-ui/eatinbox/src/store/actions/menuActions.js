import axios from 'axios'

export const GET_MENU_LIST = 'GET_MENU_LIST'

export const getMenuList = () => {
    const url = 'http://192.168.0.105:8000/get-menu-list/'

    return async dispatch => {
        try {
            let response = axios.get(url)
            console.log(response)
        }

        catch(err) {
            console.log(err)
        }
    } 
}