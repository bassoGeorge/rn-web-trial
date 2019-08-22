import React, {Fragment} from 'react';
import {HomeContainerGen} from './home.container';

export class HomeWrapperComponent extends React.Component {
	constructor(props) {
		super(props);

		this.processAndHandleClick = this.processAndHandleClick.bind(this)
	}

	processAndHandleClick(str) {
		this.props.onClick(str + " - with additional processing");
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


export const HomeWrapper = HomeContainerGen(HomeWrapperComponent);
