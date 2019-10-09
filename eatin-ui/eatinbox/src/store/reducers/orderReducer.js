import * as actionTypes from '../actions/orderActions'

const initialState = {
    pastOrdersList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
    
    case actionTypes.SET_PAST_ORDERS:
        return {
            pastOrdersList: [...action.orderList]
        }

    default:
        return state
    }
}
