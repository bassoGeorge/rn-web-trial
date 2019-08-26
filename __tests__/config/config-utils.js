const path   = require('path')
const common = {
	// Any common config here for all kinds of jest tests
	rootDir: path.resolve(__dirname, '../../')
}

const iosCommon = {
	...common,
	preset                 : "@testing-library/react-native",
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
	],
	setupFilesAfterEnv     : [
		"<rootDir>/__tests__/config/ios.test-setup.js"
	]
}


const webCommon = {
	...common,
	setupFilesAfterEnv: [
		"<rootDir>/__tests__/config/web.test-setup.js"
	]
}

module.exports = {
	common,
	iosCommon,
	webCommon
}
