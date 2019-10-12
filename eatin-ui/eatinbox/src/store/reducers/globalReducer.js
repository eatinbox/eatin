import * as actionTypes from '../actions/globalActions'

const initialState = {
    _navigate: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NAVIGATION:
            return {
                ...state,
                _navigate: action.nav
            }

        default:
            return state
    }
}
