import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer, createStackNavigator} from 'react-navigation'

import store from './src/store/store'

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
import FoodCartScreen from './src/screens/FoodCart/FoodCartScreen'
import SetLocationScreen from './src/screens/SetLocation/SetLocationScreen'
import TrackPartnerScreen from './src/screens/TrackPartner/TrackPartnerScreen'
import Profile from './src/screens/Profile/ProfilePage';




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
    FoodCartScreen,
    CurrentOrderScreen,
    RegisterScreen,
    FilterScreen,
    LoginScreen,
    MenuScreen,
    SearchScreen,
    PastOrderScreen,
    Payment,
    AddressPage,
    SetLocationScreen,
    TrackPartnerScreen,
    Profile,
  },

  {
    initialRouteName: 'MenuScreen',
    defaultNavigationOptions: {
      header: null,
    }
  }
)

const AppContainer = createAppContainer(rootStack)