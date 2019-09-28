import * as actionType from '../actions/userActions'

const initialState = {
    user:{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
    },
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
    
    case actionType.SET_PASSWORD1:
        return {
            ...state,
            user: {
                ...state.user,
                password2: action.password
            }
        }

    default:
        return state
    }
}
