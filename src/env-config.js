const coreConfig = {

	platform   : null,                    // WEB | IOS
	apiUrl     : null,                    // /api for web, otherwise host/api
	environment: process.env.NODE_ENV,    // development vs production

	init(platform, apiUrl) {
		this.platform = platform;
		this.apiUrl   = apiUrl;
	},
};

export const EnvConfig = Object.create(coreConfig);

EnvConfig.getPlatform = function () {
	return this.platform;
};

EnvConfig.getEnvironment = function () {
	return this.environment;
};

EnvConfig.getApiUrl = function () {
	return this.apiUrl;
};
