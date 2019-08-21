import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
	return (
		<SafeAreaView>
			<View css={`padding: 20px; justify-content: space-between; width: 100%;`}>
				<Text css={`font-size: 20px;`}>This is the Home Page</Text>
				<Text>Some more text just to try out. We need more text to verify the padding on the view because react native
					makes it difficult to guess</Text>
				<Button css={`align-self: flex-end;`}
				        title="Details"
				        onPress={() => navigation.navigate('Details', {
					        name: 'john',
					        id  : 1,
				        })}
				/>
			</View>
		</SafeAreaView>
	);
}
