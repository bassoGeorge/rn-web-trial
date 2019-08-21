import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {AppWrapperContainer} from './app-wrapper';
import {EnvConfig} from '../../env-config';
import ScTrial from '../sc-trial/ScTrial.web';

import {createSwitchNavigator, createNavigator, StackRouter, SceneView} from '@react-navigation/core';
import {createBrowserApp} from '@react-navigation/web';
import Home from '../home/Home.web';

export class App extends React.Component {
	render() {
		return (
			<AppWrapperContainer render={({title, subTitle, onClick}) =>
				(
					<div>
						<h1>{title}</h1>
						<p>{subTitle}</p>
						<NavigationContainer/>
					</div>
				)
			}
			/>
		);
	}
}

class MainLayout extends React.Component {
	render() {
		const { descriptors, navigation } = this.props;
		const activeKey = navigation.state.routes[navigation.state.index].key;
		const descriptor = descriptors[activeKey];

		return (
			<div>
				<div>
					<SceneView
						component={descriptor.getComponent()}
						navigation={descriptor.navigation}
					/>
				</div>
			</div>
		);
	}
}

const HomeRouter = StackRouter({
	Home: {
		screen: Home,
		path: '',
	},
	Details: {
		screen: ScTrial,
		path: 'details'
	}
}, {
	initialRouteName: 'Home'
});

const MainNavigator = createNavigator(
	MainLayout,
	HomeRouter,
	{}
);

const NavigationContainer = createBrowserApp(MainNavigator);

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
)
