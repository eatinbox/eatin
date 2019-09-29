import * as actionTypes from '../actions/locationActions'

const initialState = {
    region:{},
}

export default (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.SET_LOCATION:
        return {
            region: {
                ...action.region,
            }
        }

    default:
        return state
    }
}
