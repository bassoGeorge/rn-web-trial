// Some Essential Mocks
jest.mock('NativeAnimatedHelper').mock('react-native-gesture-handler', () => {
	const View = require('react-native/Libraries/Components/View/View');
	return {
		State            : {},
		PanGestureHandler: View,
		BaseButton       : View,
		Directions       : {},
	};
});
