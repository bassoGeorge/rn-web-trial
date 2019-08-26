const webCommon = require('./common.web')

module.exports = {
	...webCommon,
	testRegex: "src/.*\\.web\\.spec\\.jsx?$"
}
