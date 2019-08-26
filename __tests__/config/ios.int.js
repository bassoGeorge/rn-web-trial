const common = require('./common')

module.exports = {
	...common,
	testRegex: "__tests__/integration/.*\\.ios\\.int\\.jsx?$",
	preset   : "@testing-library/react-native"
}
