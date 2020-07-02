const contentfulExport = require("contentful-export");
const contentfulConfig = require("./config/contentful-config");
const {
  DATE,
  LOCAL_BACKUP_PATH,
  TERMINAL_FONT_BLUE,
  TERMINAL_FONT_RED,
} = require("./config/app-config");
const argv = require("./config/yargs/backup.yargs-config");


/**
 * Exports data from a Contentful environment.
 * @param {string} environment - Target environment to back up data from. Defaults to master if no env is provided.
 */
function backupContentful(environment="master") {
  const file_name = `contentful-backup_${environment}_${DATE}.json`;
  const options = {
    contentFile: file_name,
    environmentId: environment,
    exportDir: LOCAL_BACKUP_PATH,
    useVerboseRenderer: false,
    downloadAssets:true,
    saveFile: true,
    ...contentfulConfig,
  };
    return contentfulExport(options).then(()=>{
      console.log(
        TERMINAL_FONT_BLUE,
        `File [${file_name}] successfully downloaded from ${environment}. 🚀`
      );
    })
    .catch((err) => {
      console.error(TERMINAL_FONT_RED, `On no! Some errors occured 🤯:`, err);
      // An error here should ping some service to alert the back up was not created
    });
}

backupContentful(argv.environment);