const common = require('./common')

module.exports = {
	...common,
	setupFilesAfterEnv: [
		"<rootDir>/__tests__/config/web.test-setup.js"
	]
}
