import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {styles as styleObj} from './styles';

const styles = StyleSheet.create(styleObj);

export default function AphroTrial(props) {
	return (
		<View style={styles.view}>
			<Text style={styles.heading}>Trying out some styling using Aphrodite JS</Text>
			<Text style={styles.subPara}>This is a sub-paragraph</Text>
			<Text style={[styles.subPara, styles.emphasis]}>With some more emphasis</Text>
		</View>
	)
}
