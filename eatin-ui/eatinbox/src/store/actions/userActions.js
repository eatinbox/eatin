import axios from 'axios'

export const SET_EMAIL = 'SET_EMAIL'
export const SET_FULLNAME = 'SET_FULLNAME'
export const SET_PASSWORD = 'SET_PASSWORD'

export const setFullName = (fullname) => {
    console.log(fullname)

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