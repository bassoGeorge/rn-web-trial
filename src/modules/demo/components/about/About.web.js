import React from 'react';
import {AboutContainerGen} from './about.container';

export function AboutComponent({}) {
	return (
		<div css={`padding: 30px;`}>
			<h1 css={`font-size: 20px; color: blue;`}>This is the About Page</h1>
			<p>Some more text just to try out</p>
		</div>
	);
}

export const About = AboutContainerGen(AboutComponent);
export default About
