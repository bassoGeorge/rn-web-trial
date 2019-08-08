const merge = require('webpack-merge')

const loadCommonConfig = require('./web-build-utils/webpack.common')
const loadModeConfig   = env => require(`./web-build-utils/webpack.${env.mode}`)(env)
const loadPresets      = require('./web-build-utils/load-presets')

module.exports = ({mode = 'production', presets = [], ...rest}) => {

	const corePresets = [
		"html",
		"es6",
	]

	// if only one preset is there, it is parsed as string, otherwise array. We convert to array here
	const commandLinePresets = [].concat(...[presets])

	const env = {
		mode,
		presets: [...corePresets, ...commandLinePresets],
		...rest
	}

	return merge(
		loadCommonConfig(env),
		loadModeConfig(env),
		loadPresets(env)
	)
}
