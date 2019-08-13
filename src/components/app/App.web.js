import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {AppWrapperContainer} from './app-wrapper';
import {API_URL, ENVIRONMENT} from '../../trial';

export class App extends React.Component {
	render() {
		return (
			<AppWrapperContainer render={({title, subTitle, onClick}) =>
				(
					<div>
						<h1>{title}</h1>
						<p>{subTitle}</p>
						<button onClick={() => onClick('web')}>Shake Up</button>
						<div>
							<p>
								Env description: {ENVIRONMENT}
							</p>
							<p>
								API: {API_URL}
							</p>
						</div>
					</div>
				)
			}
			/>
		);
	}
}

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
)
