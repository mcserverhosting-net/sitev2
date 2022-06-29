---
title: "How to Create a minecraft proxy Server"
author: "jeremy"
tags: ["cli", "server", "bungee", "create"]
date: 2020-08-10T05:38:44-04:00
draft: false
faqs: "Server Deployment"
---
## The Configuration File
```
apiVersion: mcserverhosting.net/v2
kind: BungeeDeployment
```
## The name of the server
```
metadata:
  name: example-server
```
```
spec:
  config:
    memory:
      initial: 500M
      max: 624M
    network:
      domainName: 
      routeName:
  groupID: 1000
  ```
  ## The type of proxy
  we allow custom minecraft proxy's to be ran 
  ```
  jar:
  online: true
  type: CUSTOM
  userID: 1001
  ```
  # Deploying

Let's make a server directory on your local machine! This way, we can keep the server config file for later adjustments if needed. [Right click this link](https://raw.githubusercontent.com/mcserverhosting-net/mc-operator/master/server-op/deploy/crds/mcserverhosting.net_v2_minecraftserver_cr.yaml) and save this file to your directory!

Make any adjustments you see fit. Once you're ready, let's deploy the server!

1. Navigate to your working directory by running `cd path/to/your/directory/you/made`
2. Run `mcsh apply -f server.yaml`
3. Check on the server with `mcsh get pods`

If it is showing as creating, you're on your way to a new minecraft proxy server.

### Troubleshooting
If, for some reason, your server doesn't get accepted or still shows as pending, check the errors shown when you try to deploy it. 
You can see these errors after you run the command or in `mcsh get events`. A common one is setting the RAM value to high. Ensure it is within your purchased quota! 