import axios from 'axios'
import * as urls from '../../../apiUrl'

export const SET_MENU_LIST = 'SET_MENU_LIST'

export const setMenuList = (menuList) => {
    return {
        type: SET_MENU_LIST,
        menuList
    }
}

export const getMenuList = () => {
    const url = urls.local + 'vendors/menulist/'

    return async dispatch => {
        try {
            let response = await axios.get(url)
            // console.log("this is ", response)
            dispatch(setMenuList(response.data))
            
        }

        catch(err) {
            // console.log(err)
        }
    } 
}