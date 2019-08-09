import {connect} from 'react-redux'

export const mapStateToProps = state => ({
	title: state.title,
	subTitle: state.subTitle
});

export const mapDispatchToProps = dispatch => ({
	onClick: (str) => dispatch({ type: "TRIAL" , payload: str})
});

export const AppContainerGen = connect(mapStateToProps, mapDispatchToProps);
