module.exports = require("yargs").option("environment", {
  alias: "e",
  type: "string",
  description:
    "Contentful environment to backup. If no value is passed environment defaults to master",
}).argv;