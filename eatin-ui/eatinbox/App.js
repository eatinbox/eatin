import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import menuList from './src/store/reducers/menuList';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import IntroductionScreen from './src/screens/Introduction/IntroductionScreen'
import VenderInfoScreen from './src/screens/VenderInfo/VenderInfoScreen';
import FoodScreen from './src/screens/Food/FoodScreen';

import CartScreen from './src/screens/Cart/CartScreen';
import CurrentOrderScreen from './src/screens/Orders/Current/CurrentOrderScreen';
// import PastOrderScreen from './src/screens/Orders/Past/PastOrderScreen'
import FilterScreen from './src/screens/Filter/FilterScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import Playground from './src/screens/Playground/Playground';

const store = createStore(menuList, applyMiddleware(thunk))


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
    Introduction: IntroductionScreen,
    Vendor: VenderInfoScreen,
    Food: CartScreen,
    CurrentOrderScreen: CurrentOrderScreen,
    Register: RegisterScreen,
    Menu: FoodScreen,
    Play: Playground,
    FilterScreen: FilterScreen
  },

  {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
      // transitionConfig: () => fromRight(),
      header: null,
    }
  }
)

const AppContainer = createAppContainer(rootStack)