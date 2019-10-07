import * as actionTypes from '../actions/cartActions'

const initialState = {
    cartList: [],
    postData: {
        menus:[],
    },
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_TO_CART: {
            const newCart = [...state.cartList]
            const idCart = [...state.postData.menus]
            // If the object already exsists in the cart
            if (newCart.some((item) => item.pk === action.item.pk))
                return {
                    ...state
                }

            newCart.push(action.item)
            idCart.push({
                menu: action.item.pk,
                count: 1,
            })

            return {
                ...state,
                cartList: newCart,
                postData: {
                    ...state.postData,
                    menus: idCart,
                },
            }

        }

        case actionTypes.REMOVE_FROM_CART: {
            const newcart = state.cartList.filter((item) => item.pk != action.pk)
            const idCart = state.postData.menus.filter((item) => item.menu != action.pk)

            return {
                ...state,
                cartList: newcart,
                postData: {
                    ...state.postData,
                    menus: idCart,
                },
            }

        }

        case actionTypes.INCREASE_COUNT: {
            const count = state.postData.menus.find((item) => item.menu == action.pk).count 
            const idCart = [...state.postData.menus]
            idCart.find((item) => item.menu == action.pk).count = count + 1
            
            return {
                ...state,
                postData: {
                    ...state.postData,
                    menus: idCart,
                },
            }
        }

        case actionTypes.DECREASE_COUNT: {
            const count = state.postData.menus.find((item) => item.menu == action.pk).count 
            const idCart = [...state.postData.menus]
            idCart.find((item) => item.menu == action.pk).count = count - 1
            
            return {
                ...state,
                postData: {
                    ...state.postData,
                    menus: idCart,
                },
            }
        }
        
        default:
            return state
    }
}
