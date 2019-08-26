const iosCommon = require('./common.ios')

module.exports = {
	...iosCommon,
	testRegex: "src/.*\\.ios\\.spec\\.jsx?$",
}
