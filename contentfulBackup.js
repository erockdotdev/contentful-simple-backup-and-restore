const contentfulExport = require("contentful-export");
const contentfulConfig = require("./config/contentfulConfig");
const argv = require("./config/yargs/backup.yargs-config");

const date = new Date().toISOString();

const local_backup_path = "./contentful_backup";


function backupContentful(environment="master") {
  const file_name = `contentful-backup_${environment}_${date}.json`;
  const options = {
    contentFile: file_name,
    exportDir: local_backup_path,
    useVerboseRenderer: false,
    saveFile: true,
    environmentId: environment,
    ...contentfulConfig,
  };
    return contentfulExport(options).then(()=>{
      console.log( `File [${file_name}] successfully downloaded from ${environment}. 🚀`);
    })
    .catch(() => {
      console.error(`On no! Some errors occured 🤯:`, err);
      // An error here should ping some service to alert the back up was not created
    });
}

backupContentful(argv.environment);