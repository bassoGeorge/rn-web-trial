import React from 'react';
import {Link} from '@react-navigation/web'

export default function About({navigation}) {
	return (
		<div css={`padding: 30px;`}>
			<h1 css={`font-size: 20px; color: blue;`}>This is the About Page</h1>
			<p>Some more text just to try out</p>
			<Link routeName="Details" params={{name: 'jerrico', id: 'blah'}}>Deep back</Link>
		</div>
	);
}
