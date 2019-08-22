import {connect} from 'react-redux'

export const mapStateToProps = state => ({
	title: state.title,
	subTitle: state.subTitle
});

export const AboutContainerGen = connect(mapStateToProps, null);
