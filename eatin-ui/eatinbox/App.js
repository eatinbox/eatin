import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {createAppContainer, createStackNavigator} from 'react-navigation'
//import { fromRight } from 'react-navigation-transitions';
// import WelcomeScreen from './src/screens/Welcome/WelcomeScreen'
import contentReducer from './src/store/reducers/content';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import IntroductionScreen from './src/screens/Introduction/IntroductionScreen'
import VenderInfoScreen from './src/screens/VenderInfo/VenderInfoScreen';
import FoodScreen from './src/screens/Food/FoodScreen';

const store = createStore(contentReducer)


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
    Food: FoodScreen
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