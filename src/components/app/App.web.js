import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {AppWrapperContainer} from './app-wrapper';
import ScTrial from '../sc-trial/ScTrial.web';

import {createNavigator, SceneView, StackRouter, TabRouter} from '@react-navigation/core';
import {createBrowserApp, Link} from '@react-navigation/web';
import Home from '../home/Home.web';
import About from '../about/about.web';

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
		const {descriptors, navigation} = this.props;
		const activeRoute           = navigation.state.routes[navigation.state.index];
		const descriptor                = descriptors[activeRoute.key];

		return (
			<div>
				<header css={`background-color: #f8f8f8; color: black; width: 100%; padding: 20px; display: flex; justify-content: flex-start;`}>
					<span>Trial react + react native</span>
					<Link routeName="Home">Home {activeRoute.routeName === 'Home' ? "--active" : ''}</Link>
					<Link routeName="About">About {activeRoute.routeName === 'About' ? "--active" : ''}</Link>
				</header>
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

class ScreenLayout extends React.Component {
	render() {
		const {descriptors, navigation} = this.props;
		const activeKey                 = navigation.state.routes[navigation.state.index].key;
		const descriptor                = descriptors[activeKey];
		return (
			<SceneView
				component={descriptor.getComponent()}
				navigation={descriptor.navigation}
			/>
		);
	}
}

const HomeRouter    = StackRouter({
	      Home   : {
		      screen: Home,
		      path  : '',
	      },
	      Details: {
		      screen: ScTrial,
		      path  : 'details',
	      },
      }, {
	      initialRouteName: 'Home',
      }),
      HomeNavigator = createNavigator(
	      ScreenLayout,
	      HomeRouter,
	      {},
      );

const AboutRouter    = StackRouter({
	      About: {
		      screen: About,
		      path  : '',
	      },
      }),
      AboutNavigator = createNavigator(
	      ScreenLayout,
	      AboutRouter,
	      {},
      );


const MainRouter    = TabRouter({
	      Home : {
		      screen: HomeNavigator,
		      path  : '',
	      },
	      About: {
		      screen: AboutNavigator,
		      path  : 'about',
	      },
      }, {
	      initialRouteName: 'Home',
      }),
      MainNavigator = createNavigator(
	      MainLayout,
	      MainRouter,
	      {},
      );

const NavigationContainer = createBrowserApp(MainNavigator);

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
)
