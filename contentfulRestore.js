const contentfulImport = require("contentful-import");
const contentfulConfig = require("./config/contentfulConfig");
const argv = require("./config/yargs/restore.yargs-config");


function restoreContentful(backupFile, environment) {
  const options = {
    contentFile: `contentful_backup/${backupFile}`,
    environmentId: environment,
    ...contentfulConfig,
  };
  return contentfulImport(options).then(()=>{
    `File [${backupFile}] successfully imported from ${environment} environment. 🚀`;
  })
  .catch((error)=>{
    console.error(`On no! Some errors occured 🤯:`, err);
  })
}

restoreContentful(argv.backupFile, argv.environment);








