Contentful back up POC

This is based off of these packages
https://github.com/contentful/contentful-import
https://github.com/contentful/contentful-export


---------


Backing up an Environment 

node contentfulBackup ( defaults to master )
or select an environment to back up with 
node contentfulBackup --environment=test-import or node contentfulBackup -e=test-import
if successful you will see something like 
File [contentful-backup_test-import_2020-07-02T14:12:04.240Z.json] successfully downloaded from test-import. 🚀
and the file will be in contentful_backup

Restoring an Environment 

Both the environment you wish to restore to and the file to restore from are required 
(it does not default to master to avoid accidentally restoring to master)
node contentfulRestore.js --backupFile=contentful-backup_test-import_2020-07-01T20:38:22.068Z.json --environment=master
or with aliases
node contentfulRestore.js -f=contentful-backup_test-import_2020-07-01T20:38:22.068Z.json -e=master



File Names
they are prefixed with followed by the name of the environment copied from and a timestamp
contentful-backup_[environment]_[timestamp]
contentful-backup_test-import_2020-07-02T14:20:15.220Z.json

ENV 
CONTENTFUL_SPACED_ID // which contentful environment we are working from 
CONTENTFUL_MANAGEMENT_TOKEN // Read write access to the contentful space


if we want to automate this completely the we can use and AWS Lambda function as described here
https://www.contentful.com/blog/2019/05/15/configuring-automatic-backups-for-contentful/

Otherwise this would be a manual job to run the backup script before each deploy

Update js docs
npm install -g jsdoc
jsdoc contentfulBackup.js  contentfulRestore.js 


Notes: 
It looks like restores are addative, meaning if you have new data not in the restore and run a restore you will get the restore and the new data.

This would probably be most efficent to be set up as a lambda and have both daily jobs to run a back up and have a webhook triggered to back up when a deploy is initiated ( and also something to clear old backups after a period of time )

We should also demo a few restore scenarios to make sure were confident in the back ups

If a back up fails we should have some service to monitor that.

Add discovery notes questions to confluence
