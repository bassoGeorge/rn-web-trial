import React from 'react'
import {View, Text, Button} from 'react-native'
import {AboutContainerGen} from './about.container';

export function AboutComponent({title, navigation}) {
	return(
		<View css={`padding: 30px;`}>
			<Text css={`font-size: 20px; color: blue;`}>{title} | About Page</Text>
			<Text>Some more text just to try out</Text>
			<Button
				title="Deep navigation check"
				onPress={() => navigation.navigate("Details", {name: "Deep check", id: 100})}
			/>
		</View>
	)
}

export const About = AboutContainerGen(AboutComponent);
export default About
