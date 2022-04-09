---
title: "Server set up"
author: "jeremy"
tags: ["server"]
categories: ["Getting Started"]
servertypes: ["all"]
date: 2020-07-06T05:38:44-04:00
draft: false
---

### How to set up a server:
1. Grab the yaml from [here](https://github.com/mcserverhosting-net/mc-operator/blob/master/deploy/examples/server.yaml)
2. edit the fields to match your plan and interest 
3. use powershell to use the command: cd (drive and folders of  where the file is)
4. apply the yaml via mcsh apply -f the-server-config-file.yaml


---
### Notes:
<br>  To restart after a yaml edit use: "mcsh delete pod (pod name), after the yaml is appied via step 4.
<br> You can delete a server via CML , however it will still show in the files.
<br> You can have as many servers as your plan states.
<br>