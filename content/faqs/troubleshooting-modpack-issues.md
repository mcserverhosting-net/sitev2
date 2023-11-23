---
title: Modpack Compatibility and Performance Issues
faqs: ['Troubleshooting']
date: 2023-11-22
draft: false
---

## Introduction
Experiencing issues with your modpack can lead to unexpected downtime and a less enjoyable experience for your players. This guide will provide you with a detailed process to troubleshoot and resolve the most common modpack-related issues.

### Step 1: Check Modpack Compatibility
Before anything else, make sure that the modpack version you're using is intended for and compatible with your server's Minecraft version. For example, a modpack designed for Minecraft 1.12 might not work properly with a server running Minecraft 1.16.

### Step 2: Review Memory Requirements
Modpacks can be demanding on server resources, especially RAM. If you're experiencing lag or crashes, check if your server meets the modpack's minimum memory requirements. Allocate more RAM to the Minecraft client and consider upgrading your server plan if necessary.

### Step 3: Modpack Installation
Utilize SFTP to upload modpack files securely to your server's directory. If you run into issues, double-check the file structure and confirm that your modpack's files match those required by the server. Our guide on Using SFTP with WinSCP can walk you through the process step by step.

### Step 4: Server Upgrade Considerations
If your server struggles to handle the modpack after trying the previous steps, it might be time for an upgrade. Review the server plans available to support the load, ensuring they offer the performance required for the best gameplay experience.

### Step 5: Contact Support
Sometimes issues can be elusive, and it's okay to ask for help. If you're still facing problems after all your efforts, our support team is here for you. Provide them with detailed information, including any error messages, so they can assist you effectively.

## Regular Backups
Always back up your server data regularly. This best practice ensures that you can restore your world to a previous state if a modpack update or server change leads to unexpected issues.

**Example Troubleshooting Scenario:**
Imagine your server is frequently crashing after installing a new modpack. You've allocated 3GB of RAM, which you thought was sufficient. After reviewing the modpack requirements, you realize it recommends at least 4GB of RAM for stability. By allocating an additional 1GB and restarting the server, you notice the crashes subside, confirming the issue was due to insufficient memory allocation.
