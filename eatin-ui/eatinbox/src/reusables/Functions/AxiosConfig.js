// import store from '../../store/store'

export const axiosGetConfig = (url, user, params) => {
    // const user = store.getState().userReducer.session_user

    return {
        method: 'get',
        url,
        headers: {
            "content-type": "application/json",
            "Authorization": "JWT " + user.token
        },
        params: {
            is_user: 'customer',
            ...params,
        },
    }
}

export const axiosPostConfig = (url, data) => {
    const user = store.getState().userReducer.session_user

    return {
        method: 'post',
        url,
        headers: {
            "content-type": "application/json",
            "Authorization": "JWT " + user.token
        },
        data: {
            is_user: 'customer',
            ...data,
        },
    }
}