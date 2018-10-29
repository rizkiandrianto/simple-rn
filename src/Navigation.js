import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import App from '../App';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  App: {
    screen: App
  }
}, {
  initialRouteName: 'App'
});

export default class Navigation extends Component {
  render() {
    return <RootStack />;
  }
}
