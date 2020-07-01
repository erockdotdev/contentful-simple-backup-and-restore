module.exports = require("yargs")
  .option("backupFile", {
    alias: "b",
    type: "string",
    description: "File containing contentful back up data",
  })
  .option("environment", {
    alias: "e",
    type: "string",
    description: "Contentful environment to restore",
  })
  .demandOption(
    ["backupFile", "environment"],
    "Both backupFile and environment are required to work with this tool 🧐"
  ).argv;