import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {createAppContainer, createStackNavigator} from 'react-navigation'

import menuListReducer from './src/store/reducers/menuList';   
import userReducer from './src/store/reducers/userReducer'

import IntroductionScreen from './src/screens/Introduction/IntroductionScreen'
import VenderInfoScreen from './src/screens/VenderInfo/VenderInfoScreen';
import MenuScreen from './src/screens/Food/MenuScreen';
import CartScreen from './src/screens/Cart/CartScreen';
import CurrentOrderScreen from './src/screens/Orders/Current/CurrentOrderScreen';
import FilterScreen from './src/screens/Filter/FilterScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import PastOrderScreen from './src/screens/Orders/Past/PastOrderScreen';
import Payment from './src/screens/Payment/paymentPage';
import AddressPage from './src/screens/Address/AddressPage';


const rootReducer = combineReducers({
  register : userReducer,
  menuList: menuListReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <AppContainer/>
      </Provider>
    );
  }
}


const rootStack = createStackNavigator(
  {
    IntroductionScreen,
    VenderInfoScreen,
    CartScreen,
    CurrentOrderScreen,
    RegisterScreen,
    FilterScreen,
    LoginScreen,
    MenuScreen,
    SearchScreen,
    PastOrderScreen,
    Payment,
    AddressPage
  },

  {
    initialRouteName: 'MenuScreen',
    defaultNavigationOptions: {
      header: null,
    }
  }
)

const AppContainer = createAppContainer(rootStack)