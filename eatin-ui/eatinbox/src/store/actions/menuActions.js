import axios from 'axios'

export const SET_MENU_LIST = 'SET_MENU_LIST'

export const setMenuList = (menuList) => {
    return {
        type: SET_MENU_LIST,
        menuList
    }
}

export const getMenuList = () => {
    const url = 'http://192.168.0.110:8000/get-menu-list/'

    return async dispatch => {
        try {
            let response = await axios.get(url)
            console.log("this is ", response)
            dispatch(setMenuList(response.data))
            
        }

        catch(err) {
            console.log(err)
        }
    } 
}