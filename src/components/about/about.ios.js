import React from 'react'
import {View, Text} from 'react-native'

export default function About(props) {
	return(
		<View css={`padding: 30px;`}>
			<Text css={`font-size: 20px; color: blue;`}>This is the About Page</Text>
			<Text>Some more text just to try out</Text>
		</View>
	)
}
