const common = require('./config-utils').common

module.exports = {
	...common,
	testRegex: "src/.*(?<!\\.web|\\.ios)\\.spec\\.jsx?$"
}
