const common = require('./common')

module.exports = {
	...common,
	preset                 : "@testing-library/react-native",
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
	],
	setupFilesAfterEnv     : [
		"<rootDir>/__tests__/config/ios.test-setup.js"
	]
}
