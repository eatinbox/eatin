import * as actionTypes from '../actions/menuActions'

const initialState = {
    menuList: [],
    cartList:[],
    overlayVisible: true,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_MENU_LIST:
            return {
                ...state,
                menuList: [...action.menuList],
                overlayVisible: false,
            }
        
        case actionTypes.ADD_TO_CART:
            const newCart = [...state.cartList]
            // If the object already exsists in the cart
            if (newCart.some((item) => item.pk === action.item.pk))
                return {
                    ...state
                }

            newCart.push(action.item)

            return {
                ...state,
                cartList: newCart
            }
        
        case actionTypes.REMOVE_FROM_CART:
            const newcart = state.cartList.filter((item) => item.pk != action.pk)
            
            return {
                ...state,
                cartList: newcart
            }

        default:
            return state
    }
}

export default reducer;