let env = process.env.NODE_ENV;
if (env) {
  env = env.trim();
}
module.exports = require("./env-variables")[env || "development"];
