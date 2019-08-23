const common = require('./common')

module.exports = {
	...common,
	testRegex: "src/.*\\.ios\\.spec\\.jsx?$",
	preset   : "@testing-library/react-native"
}
