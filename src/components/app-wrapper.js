import React, {Fragment} from 'react';
import {AppContainerGen} from '../containersGens/app';

export class AppWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.processAndHandleClick = this.processAndHandleClick.bind(this)
	}

	processAndHandleClick(str) {
		this.props.onClick(str + " :: processed");
	}

	render() {
		return <Fragment>
			{this.props.render({
				title: this.props.title,
				subTitle: this.props.subTitle,
				onClick: this.processAndHandleClick
			})}
		</Fragment>
	}
}


export const AppWrapperContainer = AppContainerGen(AppWrapper);
