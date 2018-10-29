/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Home';
import Navigation from './src/Navigation'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
