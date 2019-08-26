const webCommon = require('./common.web')

module.exports = {
	...webCommon,
	testRegex: "__tests__/integration/.*\\.web\\.int\\.jsx?$"
}
