import React from 'react';
import {AppContainerGen} from '../shared/containersGens/app';
import {Provider} from 'react-redux';
import {store} from '../shared/store';

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.subTitle}</p>
				<button onClick={() => this.props.onClick("web")}>Shake Up</button>
			</div>
		);
	}
}

export const AppContainer = AppContainerGen(App);

export default () => (
	<Provider store={store}>
		<AppContainer/>
	</Provider>
)
