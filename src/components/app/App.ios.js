/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {AppWrapperContainer} from './app-wrapper';
import Home from '../home/Home.ios';
import ScTrial from '../sc-trial/ScTrial.ios';
import About from '../about/about.ios';

const App = ({title, subTitle, onClick}) => {
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

const styles = StyleSheet.create({
	scrollView        : {
		backgroundColor: Colors.lighter,
	},
	engine            : {
		position: 'absolute',
		right   : 0,
	},
	body              : {
		backgroundColor: Colors.white,
	},
	sectionContainer  : {
		marginTop        : 32,
		paddingHorizontal: 24,
	},
	sectionTitle      : {
		fontSize  : 24,
		fontWeight: '600',
		color     : Colors.black,
	},
	sectionDescription: {
		marginTop : 8,
		fontSize  : 18,
		fontWeight: '400',
		color     : Colors.dark,
	},
	highlight         : {
		fontWeight: '700',
	},
	footer            : {
		color       : Colors.dark,
		fontSize    : 12,
		fontWeight  : '600',
		padding     : 4,
		paddingRight: 12,
		textAlign   : 'right',
	},
});

export default () => (
	<Provider store={store}>
		<AppWrapperContainer render={data => <App {...data}/>}/>
	</Provider>
);
