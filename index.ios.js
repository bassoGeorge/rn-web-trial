/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/modules/demo/components/app/App.ios';
import {name as appName} from './app.json';
import {EnvConfig} from './src/env-config';
import { API_HOST } from 'react-native-dotenv'

EnvConfig.init("IOS", API_HOST);

AppRegistry.registerComponent(appName, () => App);
