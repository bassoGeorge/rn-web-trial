const webCommon = require("./config-utils").webCommon;

module.exports = {
  ...webCommon,
  testRegex: "src/.*\\.web\\.spec\\.jsx?$"
};
