/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/modules/demo/components/app/App.ios";
import { name as appName } from "./app.json";
import { EnvConfig } from "./src/env-config";

import buildConfig from "./ios/build-config-bridge";

EnvConfig.init("IOS", buildConfig.apiHost);

AppRegistry.registerComponent(appName, () => App);
