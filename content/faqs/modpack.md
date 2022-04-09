---
title: "How to set up server for mods"
author: "jeremy"
tags: ["server"]
categories: ["Getting Started"]
servertypes: ["all"]
date: 2020-07-06T05:38:44-04:00
draft: false
---
### To change to having mods:
1. use the yaml file to change the server type for the server that would would like to use for mods
2. use mcsh apply -f the-server-config-file.yaml
3. delete the pod so the yaml file changes can be applied
4. use file transfer to add mods to the mods folder
5. restart server with the /stop command after attaching to the server console<br>