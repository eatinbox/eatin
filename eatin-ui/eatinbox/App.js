import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import menuList from './src/store/reducers/menuList';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import IntroductionScreen from './src/screens/Introduction/IntroductionScreen'
import VenderInfoScreen from './src/screens/VenderInfo/VenderInfoScreen';
import FoodScreen from './src/screens/Food/FoodScreen';

// =====================
import CartScreen from './src/screens/Cart/CartScreen1';
//======================

const store = createStore(menuList, applyMiddleware(thunk))


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


const rootStack = createStackNavigator(
  {
    Introduction: IntroductionScreen,
    Vendor: VenderInfoScreen,
    Food: CartScreen
  },

  {
    initialRouteName: 'Introduction',
    defaultNavigationOptions: {
      // transitionConfig: () => fromRight(),
      header: null,
    }
  }
)

const AppContainer = createAppContainer(rootStack)