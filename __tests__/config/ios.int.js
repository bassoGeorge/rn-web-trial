const iosCommon = require("./config-utils").iosCommon;

module.exports = {
  ...iosCommon,
  testRegex: "__tests__/integration/.*\\.ios\\.int\\.jsx?$"
};
