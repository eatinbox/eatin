import axios from 'axios'
import * as urls from '../../../apiUrl'

export const SET_EMAIL = 'SET_EMAIL'
export const SET_FULLNAME = 'SET_FULLNAME'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PASSWORD1 = 'SET_PASSWORD1'

const domain = urls.address

export const setFullName = (fullname) => {

    return {
        type: SET_FULLNAME,
        fullname
    }
}

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        email
    }
}

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password
    }
}

export const setPassword1 = (password) => {
    return {
        type: SET_PASSWORD1,
        password
    }
}

export const sendRegisterData = (userData) => async dispatch =>  {
    const url = domain + 'auth/register/'

    try {
        let response = await axios.post(url, userData, {headers: { 'content-type': 'application/json'}})
        console.log("this is ", response)
        
    }

    catch(err) {
        console.log(err.response)
    }
}
