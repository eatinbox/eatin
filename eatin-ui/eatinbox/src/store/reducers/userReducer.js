import * as actionType from '../actions/userActions'

const initialState = {
    user:{
        first_name: '',
        email: '',
        password: '',
    },

    addresses: null,
    status: null,
    msg: null,
    session_user: null,
}

export default reducer =  (state = initialState, action) => {
    switch (action.type) {
    
    case actionType.SET_FULLNAME:
        return {
            ...state,
            user: {
                ...state.user,
                first_name: action.fullname
            }
        }
    
    case actionType.SET_EMAIL:
        return {
            ...state,
            user: {
                ...state.user,
                email: action.email
            }
        }
    
    case actionType.SET_PASSWORD:
        return {
            ...state,
            user: {
                ...state.user,
                password: action.password
            }
        }

    case actionType.SUCCESS:
        return {
            ...state,
            status: true,
            session_user:{
                ...action.data
            }
        }

    case actionType.ERROR:
        return {
            ...state,
            status: false,
        }

    case actionType.SET_SESSION_USER:
        // console.log("session user", action.user)
        return {
            ...state,
            session_user: action.user,
        }

    case actionType.SET_ADDRESSES:
        return {
            ...state,
            addresses: [...action.addresses],
        }

    default:
        return state
    }
}
