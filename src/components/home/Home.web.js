import React from 'react';
import { Link } from '@react-navigation/web'

export default function Home({navigation}) {
	return (
		<div>
			<div css={`padding: 20px; justify-content: space-between; width: 100%;`}>
				<h1 css={`font-size: 20px;`}>This is the Home Page</h1>
				<p>Some more text just to try out. We need more text to verify the padding on the view because react native
					makes it difficult to guess</p>
				{/*<button css={`align-self: flex-end;`}*/}
				{/*        onClick={() => navigation.navigate('Details', {*/}
				{/*	        name: 'john',*/}
				{/*	        id  : 1,*/}
				{/*        })}>*/}
				{/*	Click Me*/}
				{/*</button>*/}
				<Link routeName="Details" params={{ name: 'John', id: 1}}>Details page</Link>
			</div>
		</div>
	);
}
