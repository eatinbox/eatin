import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer, createStackNavigator} from 'react-navigation'

import store from './src/store/store'

import IntroductionScreen from './src/screens/Introduction/IntroductionScreen'
import VenderInfoScreen from './src/screens/VenderInfo/VenderInfoScreen';
import MenuScreen from './src/screens/Food/MenuScreen';
import CurrentOrderScreen from './src/screens/Orders/Current/CurrentOrderScreen';
import FilterScreen from './src/screens/Filter/FilterScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import PastOrderScreen from './src/screens/Orders/Past/PastOrderScreen';
import AddressScreen from './src/screens/Address/AddressScreen';
import FoodCartScreen from './src/screens/FoodCart/FoodCartScreen'
import SetLocationScreen from './src/screens/SetLocation/SetLocationScreen'
import TrackPartnerScreen from './src/screens/TrackPartner/TrackPartnerScreen'
import AddAdressScreen from './src/screens/AddAdress/AddAdressScreen';
import ProfileScreen from './src/screens/Profile/ProfilePage';
import Payment from './src/screens/Payment/paymentPage';

import Global from './src/contexts/Global';
import NavigationService from './src/Utils/NavigatorService'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Global
           {...this.props}
        >
          <AppContainer
            ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          />
        </Global>
      </Provider>
    );
  }
}


const rootStack = createStackNavigator(
  {
    IntroductionScreen,
    VenderInfoScreen,
    FoodCartScreen,
    CurrentOrderScreen,
    RegisterScreen,
    FilterScreen,
    LoginScreen,
    MenuScreen,
    SearchScreen,
    PastOrderScreen,
    AddressScreen,
    SetLocationScreen,
    TrackPartnerScreen,
    AddAdressScreen,
    ProfileScreen,
    Payment,
  },

  {
    initialRouteName: 'MenuScreen',
    defaultNavigationOptions: {
      header: null,
    }
  }
)

const AppContainer = createAppContainer(rootStack)