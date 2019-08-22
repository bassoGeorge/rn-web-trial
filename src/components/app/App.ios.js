/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from '../../store';
import Home from '../home/Home.ios';
import ScTrial from '../sc-trial/ScTrial.ios';
import About from '../about/about.ios';

const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content"/>
			{/*<SafeAreaView>*/}
			{/*	<ScrollView*/}
			{/*		contentInsetAdjustmentBehavior="automatic"*/}
			{/*		style={styles.scrollView}>*/}

			<NavigationContainer/>
			{/*	</ScrollView>*/}
			{/*</SafeAreaView>*/}
		</Fragment>
	);
};

const HomeNavigationStack = createStackNavigator({
	Home   : {
		screen: Home,
		path  : '',
	},
	Details: {
		screen: ScTrial,
		path  : '/details',
	},
}, {
	initialRouteName: 'Home',
});

const AboutNavigationStack = createStackNavigator({
	About: {
		screen: About,
		path  : '/about',
	},
});

const AppNavigation = createBottomTabNavigator({
	Home : HomeNavigationStack,
	About: AboutNavigationStack,
});

const NavigationContainer = createAppContainer(AppNavigation);

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
);
