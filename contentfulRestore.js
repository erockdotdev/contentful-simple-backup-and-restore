const contentfulImport = require("contentful-import");
const contentfulConfig = require("./config/contentful-config");
const {
  TERMINAL_FONT_BLUE,
  TERMINAL_FONT_RED,
} = require("./config/app-config");
const argv = require("./config/yargs/restore.yargs-config");

/**
 * Import backup Contentful data to target Contentful environment.
 * @param {string} backupFile - File containing previously backed up data.
 * @param {string} environment - Target environment to restore backed up data to.
 */
function restoreContentful(backupFile, environment) {
  const fileName = `contentful_backup/${backupFile}`;
  const options = {
    contentFile: fileName,
    environmentId: environment,
    ...contentfulConfig,
  };
  return contentfulImport(options).then(()=>{
    console.log(TERMINAL_FONT_BLUE, `File [${backupFile}] successfully imported to ${environment} environment. 🚀`);
  })
  .catch((err)=>{
    console.error(TERMINAL_FONT_RED, `On no! Some errors occured 🤯:`, err);
  })
}

restoreContentful(argv.backupFile, argv.environment);








