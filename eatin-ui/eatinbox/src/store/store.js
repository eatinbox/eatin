import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import menuListReducer from './reducers/menuList';   
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import locationReducer from './reducers/locationReducer'
import orderReducer from './reducers/orderReducer';
import globalReducer from './reducers/globalReducer'


const rootReducer = combineReducers({
    menuList: menuListReducer,
    userReducer,
    cartReducer,
    locationReducer,
    orderReducer,
    globalReducer,
    
  })
  
export default store = createStore(rootReducer, applyMiddleware(thunk))