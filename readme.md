Contentful back up POC

https://github.com/contentful/contentful-import
https://www.contentful.com/blog/2019/05/15/configuring-automatic-backups-for-contentful/
https://github.com/contentful/contentful-export


node contentfulRestore.js -b=contentful-backup_[master]_2020-07-01T20:37:39.936Z.json -e=master

node contentfulBackup.js -e=test-import
node contentfulBackup.js // defaults to master