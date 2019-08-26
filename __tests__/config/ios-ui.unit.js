const iosCommon = require('./config-utils').iosCommon

module.exports = {
	...iosCommon,
	testRegex: "src/.*\\.ios\\.spec\\.jsx?$",
}
