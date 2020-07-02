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
 * @param {string} environment - Target environment to backup data from. Default is set to master.
 * @param {boolean} downloadAssets - Download asset files in addition to data model and entries. Default is set to false.
 */
function backupContentful(environment="master", downloadAssets=false) {
  const fileName = `contentful-backup_${environment}_${DATE}.json`;
  const options = {
    contentFile: fileName,
    environmentId: environment,
    downloadAssets: downloadAssets,
    exportDir: LOCAL_BACKUP_PATH,
    useVerboseRenderer: false,
    saveFile: true,
    ...contentfulConfig,
  };
    return contentfulExport(options).then(()=>{
      console.log(
        TERMINAL_FONT_BLUE,
        `File [${fileName}] successfully downloaded from ${environment}. 🚀`
      );
    })
    .catch((err) => {
      console.error(TERMINAL_FONT_RED, `On no! Some errors occured 🤯:`, err);
      // An error here should ping some service to alert the back up was not created
    });
}

backupContentful(argv.environment, argv.downloadAssets);