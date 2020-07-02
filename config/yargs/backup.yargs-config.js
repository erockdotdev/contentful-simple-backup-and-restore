module.exports = require("yargs")
  .option("environment", {
    alias: "e",
    type: "string",
    description:
      "Contentful environment to backup. If no value is passed environment defaults to master",
  })
  .option("downloadAssets", {
    alias: "a",
    type: "boolean",
    description:
      "Download asset files in addition to data model and entries",
  }).argv;