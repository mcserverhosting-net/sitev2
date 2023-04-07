---
title: "Getting Started with Dashboard"
author: "jeremy"
tags: []
date: 2020-08-10T05:38:44-04:00
draft: false
faqs: "Server Deployment dashboard"
---

You can use either the visual editor or use the yaml to edit the server via the CLI in powershell.


Open a web browser and enter ` https://alpha.panel.mcsh.red/ ` or [Click here](https://alpha.panel.mcsh.red/)

To log in to the dashboard, you can use the login from the authentication server that you crea .

Once logged in, you should see an overview of the Minecraft server's current status, the amount of memory and CPU usage, and the current server address.

You can use the dashboard panel to perform various actions, such as starting or stopping the Minecraft server, creating backups, and viewing logs.

To start or stop the Minecraft server, click on the "Start" or "Stop" button located on the dashboard panel.


We allow you to set custom java args! Listed below are some flags that we normally use when the yaml file is used. **Always** keep `-XX:+UnlockExperimentalVMOptions` and `-XX:+UseCGroupMemoryLimitForHeap`
```
-Dfml.queryResult:confirm -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap
```
Troubleshoot issues: If you encounter any issues while using the application, please contact us in the support channel on discord for assistance.


To connect to sftp to work on or to upload files, you can go the server that you want to edit, and then settings, and under sftp details is your connect infomation, which can be found [here](https://mcserverhosting.net/faqs/how-to-access-files-using-winscp/)
