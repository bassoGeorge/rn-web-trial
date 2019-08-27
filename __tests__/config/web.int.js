const webCommon = require("./config-utils").webCommon;

module.exports = {
  ...webCommon,
  testRegex: "__tests__/integration/.*\\.web\\.int\\.jsx?$"
};
