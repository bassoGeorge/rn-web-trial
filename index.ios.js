/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/app/App.ios';
import {name as appName} from './app.json';
import {EnvConfig} from './src/env-config';
import { API_HOST } from 'react-native-dotenv'

EnvConfig.init("IOS", API_HOST); // failed :(

AppRegistry.registerComponent(appName, () => App);
