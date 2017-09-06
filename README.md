# Windows Installer and Auto Updater

### Purpose

##### This repository is used to test the process of bottling up a node/electron app into a windows installer with an auto updater based on github versions. It will also test be used to test the process used to create a windows shorcut that will be present on users desktops.

##### It is also going to be used to learn about tagging git versions

### Electron Builder

##### ***Sign your installer or else bad things will happen!!!***[MSDN signing info](https://docs.microsoft.com/en-us/windows-hardware/drivers/dashboard/update-a-code-signing-certificate)

### Info on Git Tags for Versions

##### Just learned that using git tag must be pushed seperately from a regular git push. Also, this automatically creates a zip and tar.gz file of the project for you.

##### Run git version patch after tagging a new version. This updates package.json to reflect the new version. This is important for integration with squirrel-server for auto updates. 
