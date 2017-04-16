/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Index from './src/Index'
import { Provider } from 'react-redux'
import store from './src/store/index'

export default class tentarapelajarmobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tentarapelajarmobile', () => tentarapelajarmobile);
