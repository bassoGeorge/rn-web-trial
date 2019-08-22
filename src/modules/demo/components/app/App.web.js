import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../../../store';
import Home from '../home/Home.web';

export class App extends React.Component {
	render() {
		return (
			<Home/>
		);
	}
}


export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
)
