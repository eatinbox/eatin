import * as actionTypesOrder from '../actions/orderActions'
import * as actionTypesCart from '../actions/cartActions'

const initialState = {
    pastOrdersList: [],
    currentOrder: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
    
    case actionTypesOrder.SET_PAST_ORDERS:
        return {
            ...state,
            pastOrdersList: [...action.orderList]
        }

    case actionTypesCart.SET_CURRENT_ORDER:
        console.log(action)
        return {
            ...state,
            currentOrder: {
                ...action.currentOrder
            }
        }
    

    default:
        return state
    }
}
