import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

import configureStore from './store/configureStore';
import Navigator from './modules/navigator/components/Navigator';

const store = configureStore({});
console.ignoredYellowBox = ['Warning: BackAndroid'];

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
