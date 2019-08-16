import React from 'react'
import {styles as styleObj} from './styles';
import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create(styleObj);

export default function AphroTrial(props) {
	return (
		<div>
			<h1 className={css(styles.heading)}>Trying out some styling using Aphrodite JS</h1>
			<p className={css(styles.subPara)}>This is a sub-paragraph</p>
			<p className={css(styles.subPara, styles.emphasis)}>With some more emphasis</p>
		</div>
	)
}
