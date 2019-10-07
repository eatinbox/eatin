import * as actionTypes from '../actions/menuActions'

const initialState = {
    menuList: [],
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
        
        default:
            return state
    }
}

export default reducer;