# React Native + Web experiment

## Setup

Make sure you have node installed. Requires minimum v10

```shell script
brew install node
```

### Web development

```shell script
npm install
npm start
```

### React Native development

#### 1. JDK and Watchman

```shell script
brew install watchman
```

If JDK is already installed, make sure its JDK 8 or newer, else

```shell script
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

#### 2. React Native CLI

```shell script
npm install -g react-native-cli
```

#### 3. Install XCode

XCode can be installed from the App store

##### Command Line Tools

You will also need to install the command line tools.
XCode Preferences (⌘,) > Locations > Command Line Tools dropdown. Select the latest command line tools to install them

#### 4. Cocoa Pods

This app uses cocoa pods to manage dependencies on ios side.

```shell script
brew install cocoapods
```

When running the app for first time, make sure you install the pod dependencies

```shell script
cd ios
pod install
```

When dependencies are changed for ios, subsequent builds might fail with some error like `PhaseScriptExecution [CP]\ Check\ Pods\ Manifest.lock`. In that case,
run `pod install` in the `ios/` again and retry

#### 5. Running in simulator

```shell script
npm install
npm run ios
```
