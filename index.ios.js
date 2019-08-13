/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/app/App.ios';
import {name as appName} from './app.json';
import {EnvConfig} from './src/env-config';

EnvConfig.init("IOS", "/api"); // failed :(

AppRegistry.registerComponent(appName, () => App);
