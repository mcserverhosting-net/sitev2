---
title: "Getting Started with Dashboard"
author: "Jeremy"
tags: []
date: 2020-08-10T05:38:44-04:00
draft: false
faqs: "Server Deployment dashboard"
---

## Getting Started with the Dashboard

1. Open a web browser and go to `https://alpha.panel.mcsh.red/` or [click here](https://alpha.panel.mcsh.red/).
2. Log in to the dashboard using the login from the authentication server that you created.
3. Once logged in, you will see an overview of the Minecraft server's current status, the amount of memory and CPU usage, and the current server address.
4. Use the dashboard panel to perform various actions, such as starting or stopping the Minecraft server, creating backups, and viewing logs.
5. To start or stop the Minecraft server, click on the "Start" or "Stop" button located on the dashboard panel.

Note: We allow you to set custom Java args! Listed below are some flags that we normally use when the YAML file is used. **Always** keep `-XX:+UnlockExperimentalVMOptions` and `-XX:+UseCGroupMemoryLimitForHeap`.```-Dfml.queryResult:confirm -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap```

To connect to SFTP to work on or upload files, go to the server that you want to edit, then go to Settings. Under "SFTP Details," you will find your connection information, which can also be found [here](https://mcserverhosting.net/faqs/how-to-access-files-using-winscp/).

If you encounter any issues while using the application, please contact us in the support channel on Discord for assistance.
