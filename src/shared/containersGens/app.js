import {connect} from 'react-redux'

export const mapStateToProps = state => ({
	title: state.title,
	subTitle: state.subTitle
});

export const mapDispatchToProps = dispatch => ({});

export const AppContainerGen = connect(mapStateToProps, mapDispatchToProps);
