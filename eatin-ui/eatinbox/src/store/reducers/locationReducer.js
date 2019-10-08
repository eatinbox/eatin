import * as actionTypes from '../actions/locationActions'

const initialState = {
    region:{
        latitude: 18.448949, 
        longitude: 73.853657,
    },
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
