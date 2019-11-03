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
        const interval = setInterval(async () => {

            try {
                let response = await axios.get(url)

                if(response){
                    dispatch(setMenuList(response.data))
                    console.log("Interbal not cleared")
                    clearInterval(interval)
                }
            }
    
            catch(err) {
                console.log("This is error", err)
            }      
        }, 1000)
    } 
}