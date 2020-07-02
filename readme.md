# Contentful backup POC

This app used [Contentful Export](https://github.com/contentful/contentful-export) and [Contentful Import](https://github.com/contentful/contentful-import) to backup and restore a Contentful space's Content Model, Content and Assets.

## Getting Started

Clone repo and `npm install`

Copy .env.example and rename to .env

Add Contentful space id and content management token to .env

## Backing up an Environment

Backups are suppoerted for the master environment as the default. However, other enviroments can be passed in to create a backup file. Only references to assets are downloaded by default. To back up assets use the -a flag.

To backup the master environment
run

`node contentfulBackup`

If successful you will see a message like this

```File [contentful-backup_master_2020-07-02T14:12:04.240Z.json] successfully downloaded from test-import. 🚀```

To run a back up on an environment other than master run

`node contentfulBackup --environment=environment_name`

or with an alias

`node contentfulBackup -e=environment_name`

for example:

`node contentfulBackup --environment=test-import`

or

`node contentfulBackup -e=test-import`

and to download with asset files

`node contentfulBackup -e=test-import -a`

If you get an error when running the above please double check your environment name is correct.

## Restoring an Environment

To import the backup file to a new environment you'll need to specify the backup file and which environment you would like to target for the restore. This does not default to master as to avoid unintentionally restoring to master when working with lower environments.

To restore an environment
run

`node contentfulRestore.js --environment=environment_name --backupFile=backup_file_name.json`

For example, if you want to restore master with the file 

`contentful-backup_test-import_2020-07-01T20:38:22.068Z.json`

You would run

`node contentfulRestore.js --environment=master --backupFile=contentful-backup_test-import_2020-07-01T20:38:22.068Z.json`
or with aliases
`node contentfulRestore.js -e=master -f=contentful-backup_test-itest-importmport_2020-07-01T20:38:22.068Z.json`

### Notes

#### File Names

contentful-backup\_[environment]\_[timestamp]

File names are prefixed with `contentful-backup_` followed by the name of the environment copied from and a timestamp.
For example a back up from an environment called `test-import` would look like:
`contentful-backup_test-import_2020-07-02T14:20:15.220Z.json`

#### Environment Variables

CONTENTFUL\_SPACED\_ID:  the contentful space we are conecting to.
CONTENTFUL\_MANAGEMENT\_TOKEN: Read write access to the contentful space.

#### More Notes

If we want to automate this completely the we can use and AWS Lambda function as described here
https://www.contentful.com/blog/2019/05/15/configuring-automatic-backups-for-contentful/

I think we would need one for backup and one for restore

Otherwise, this would be a manual job to run the backup script before each deploy

using js docs

Update js docs
npm install -g jsdoc
jsdoc contentfulBackup.js  contentfulRestore.js

#### Even More Notes

It looks like restores are addative, meaning if you have new data not in the restore and run a restore you will get the restore and the new data.

This would probably be most efficent to be set up as a lambda and have both daily jobs to run a back up and have a webhook triggered to back up when a deploy is initiated ( and also something to clear old backups after a period of time )

We should also demo a few restore scenarios to make sure were confident in the back ups

If a back up fails we should have some service to monitor that.

Add discovery notes questions to confluence
