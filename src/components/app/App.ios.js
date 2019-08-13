/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {AppWrapperContainer} from './app-wrapper';
import {ENVIRONMENT} from '../../trial';

const App = ({title, subTitle, onClick}) => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content"/>
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<Header/>
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)}
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>{title}</Text>
							<Text style={styles.sectionDescription}>
								{subTitle}
							</Text>
							<Button onPress={() => onClick('native')} title="Shake Up"/>
							<Text>
								Environment: {ENVIRONMENT}
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	);
};

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
