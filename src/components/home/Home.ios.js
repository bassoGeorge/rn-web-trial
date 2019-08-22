import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {HomeWrapper} from './home.wrapper';

export default function Home({navigation}) {
	return (
		<HomeWrapper render={({title, subTitle, onClick}) => (
			<SafeAreaView>
				<View css={`padding: 20px; justify-content: space-between; width: 100%;`}>
					<Text css={`font-size: 20px;`}>{title} | Home Page</Text>
					<Text css={`margin-bottom: 10px;`}>{subTitle}</Text>
					<Button title="Try a redux flow"
					        onPress={() => onClick("native")}
					/>
					<Text css={`margin-top: 60px;`}>Some more text just to try out. We need more text to verify the padding on the view because react native
						makes it difficult to guess</Text>
					<Button title="Details"
					        onPress={() => navigation.navigate('Details', {
						        name: 'john',
						        id  : 1,
					        })}
					/>
				</View>
			</SafeAreaView>
		)}/>
	);
}
