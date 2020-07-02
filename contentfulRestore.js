const contentfulImport = require("contentful-import");
const contentfulConfig = require("./config/contentful-config");
const {
  TERMINAL_FONT_BLUE,
  TERMINAL_FONT_RED,
} = require("./config/app-config");
const argv = require("./config/yargs/restore.yargs-config");


function restoreContentful(backupFile, environment) {
  const options = {
    contentFile: `contentful_backup/${backupFile}`,
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








