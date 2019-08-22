import React from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {HomeWrapper} from './home.wrapper';
import {EnvConfig} from '../../../../env-config';

export default function Home({navigation}) {
	return (
		<HomeWrapper render={({title, subTitle, onClick}) => (
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					css={`height: 100%; padding: 20px;`}
				>
					<View css={`justify-content: space-between; width: 100%;`}>
						<Text css={`font-size: 20px;`}>{title} | Home Page</Text>
						<Text css={`margin-bottom: 10px;`}>{subTitle}</Text>
						<Button title="Try a redux flow"
						        onPress={() => onClick('native')}
						/>
						<Text css={`margin-top: 60px;`}>Some more text just to try out. We need more text to verify the padding on
							the view because react native
							makes it difficult to guess</Text>
						<Button title="Details"
						        onPress={() => navigation.navigate('Details', {
							        name: 'john',
							        id  : 1,
						        })}
						/>
					</View>
					<View css={`margin-top: 30px;`}>
						<Text>App platform: {EnvConfig.getPlatform()}</Text>
						<Text>App environment: {EnvConfig.getEnvironment()}</Text>
						<Text>API host: {EnvConfig.getApiUrl()}</Text>
					</View>
				</ScrollView>
			</SafeAreaView>
		)}/>
	);
}
