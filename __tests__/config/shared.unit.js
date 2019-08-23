const common = require('./common')

module.exports = {
	...common,
	testRegex: "src/.*(?<!\\.web|\\.ios)\\.spec\\.jsx?$"
}
