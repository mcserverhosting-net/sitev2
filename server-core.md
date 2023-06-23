---
Title: "How to change server cores?"
Author: "Jeremy"
Tags: []
date: 2023-6-23
Draft: False
FAQs: "Dashboard"
---
Notice: we can do this on the staff end easier then clients can.

To change server cores, follow these steps:

1. **Download the jar or files for the server:** Locate and download the desired server core or files that you want to use.

2. **Upload the files to the server:** Access your server files and upload the downloaded jar or files to the root of the server.

3. **Modify the startup command:** Find the startup area for your server. Under  `SERVER JAR FILE`, Replace the current jar file name with the new file's name.

   Example: if the new jar file is named `arclight-forge-1.16.5-1.0.24.jar`, modify the startup command to `arclight-forge-1.16.5-1.0.24.jar`.
- Forge: run the forge server installer locally, which will make the  forge-jar and the libraries folder.
   - To use newer forges, after the files are moved to the server, you can set the server jar file to some similar to the following: @libraries/net/minecraftforge/forge/1.19.4-45.0.49/unix_args.txt, as it will be different depending on what version you are on.
   
![server core](../../static/images/servercore.jpg)

4. **Restart the server:** The server will now use the new jar file as the server core.

If you encounter any issues, feel free to reach out to us for assistance.
