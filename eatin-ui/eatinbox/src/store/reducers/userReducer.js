import * as actionType from '../actions/userActions'

const initialState = {
    user:{
        fullname: '',
        email: '',
        password: '',
    },
}

export default reducer =  (state = initialState, action) => {
    switch (action.type) {
    
    case actionType.SET_FULLNAME:
        return {
            ...state,
            user: {
                ...state.user,
                fullname: action.fullname
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

    default:
        return state
    }
}
