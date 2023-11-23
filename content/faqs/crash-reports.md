---
title: "Understanding Crash Reports and Logs - Minecraft Server Management"
author: "Jeremy"
tags: ["Crash Reports", "Minecraft Logs", "Server Management", "Troubleshooting"]
categories: ["Getting Started"]
servertypes: ["all"]
date: 2020-07-06T05:38:44-04:00
draft: false
faqs: "Server Management"
---

# Minecraft Client: Locating Logs and Crash Reports

When Minecraft encounters an issue and crashes, a crash report or log file may be generated to help diagnose the problem. Here's how to find them:

- Open the Windows Start Menu, type in "%appdata%" and press Enter.
- Navigate to the `.minecraft` folder.
- Inside, you'll find the `logs` and `crash-reports` folders.
- Open `latest.log` for the most recent log, and the crash report with the latest date and time for crash details.

# Minecraft Server: Accessing Crash Reports

Server crash reports provide crucial information following server crashes.

- In your server's dashboard, open the 'Files' tab.
- Enter the `crash-reports` folder.
- Select the report that corresponds with the recent crash time.
- Review the report to understand the cause of the crash.
