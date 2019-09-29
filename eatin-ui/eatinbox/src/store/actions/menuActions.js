import axios from 'axios'
import * as urls from '../../../apiUrl'

export const SET_MENU_LIST = 'SET_MENU_LIST'

const domain = urls.address

export const setMenuList = (menuList) => {
    return {
        type: SET_MENU_LIST,
        menuList
    }
}

export const getMenuList = () => {
    const url = domain + 'vendors/menulist/'

    return dispatch => {
        interval = setInterval(async () => {

            try {
                let response = await axios.get(url)

                if(response){
                    clearInterval(interval)
                    dispatch(setMenuList(response.data))
                }
            }
    
            catch(err) {
                console.log("This is error", err)
            }      
        }, 1000)
    } 
}