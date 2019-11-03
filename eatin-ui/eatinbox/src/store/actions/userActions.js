import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import * as urls from '../../../apiUrl'
import { axiosPostConfig, axiosGetConfig } from '../../reusables/Functions/AxiosConfig'

export const SET_EMAIL = 'SET_EMAIL'
export const SET_FULLNAME = 'SET_FULLNAME'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const SET_SESSION_USER = 'SET_SESSION_USER'
export const SET_ADDRESSES = 'SET_ADDRESSES'
export const SET_SESSION_USER_REGION = 'SET_SESSION_USER_REGION'

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

export const setResponse = (response) => {
    if (response.status === 201)
        return {
            type: SUCCESS,
            data: response.data,
            msg: 'Registered Successfully'
        }

    return {
        type: ERROR,
        data: response.data,
        msg: 'Some error'
    }
}

export const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user,
    }
}

export const setAddresses = (addresses) => {
    return {
        type: SET_ADDRESSES,
        addresses
    }
}

export const setSessionUserRegion = (region) => {
    return {
        type: SET_SESSION_USER_REGION,
        region,
    }
}

export const sendRegisterData = (userData) => async dispatch => {
    const url = domain + 'auth/register/'

    try {
        // const {first_name  , ...userd} = userData

        const postOb = {
            is_user: "customer",
            ...userData
        }

        let response = await axios.post(
            url,
            postOb,
            { headers: { 'content-type': 'application/json' } }
        )

        dispatch(setResponse(response))

        if (response.status === 201)
            dispatch(storeUser(response.data))
           
    }

    catch (err) {
        console.log(err.response)
    }
}

export const addAddress = (reg, user, def) => async dispatch => {
    const url = domain + 'users/address/'

    try {
        const response = await axios.post(url, reg, { 
            headers: { 
                'content-type': 'application/json',
                "Authorization": "JWT " + user.token
            },
            
        })

        // console.log(response)

        if(response.status == 201) {
            try {
                dispatch(setAddresses(response.data))
                if(def){
                    // If added for the first time at the time of registration then change the 
                    // session user location as well
                    const session_user = {
                        ...user,
                        region : {...reg}
                    }
                    dispatch(setSessionUserRegion(reg))
                    await AsyncStorage.mergeItem('@session_user', JSON.stringify(session_user))
                }
            } catch (e) {
                // saving error
                console.log(e)
            }
        }
    }

    catch (e) {
        // saving error
        console.log(e)
    }
}

export const getAddresses = (user) => async dispatch => {
    const url = domain + 'users/address/'

    try{
        const response = await axios(axiosGetConfig(url, user))
        // console.log(response)

        dispatch(setAddresses(response.data))
    }

    catch(e){
        console.log(e)
    }
}

export const storeUser = (user) => async dispatch => {
    try {
        await AsyncStorage.setItem('@session_user', JSON.stringify(user))
    } catch (e) {
        // saving error
        console.log(e)
    }
}

export const getStoredUser = () => async dispatch => {
    try {
        const value = await AsyncStorage.getItem('@session_user')
        if (value !== null) {
            const ob = JSON.parse(value)
            // console.log("User is ", ob)
            dispatch(setSessionUser(ob))
            dispatch(getAddresses(ob))
        }
        else{
            // console.log("User is anon")
            dispatch(setSessionUser({isAnon: true}))
        }

    } catch (e) {
        // error reading value
        console.log(e)
    }
}

export const removeValue = () => async dispatch => {
    try {
      await AsyncStorage.removeItem('@session_user')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  
