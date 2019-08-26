const iosCommon = require('./common.ios')

module.exports = {
	...iosCommon,
	testRegex: "__tests__/integration/.*\\.ios\\.int\\.jsx?$",
}
