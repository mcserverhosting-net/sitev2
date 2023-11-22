We manage the ip address, port forwaidng and firewall for the user. ey will only need to securre their panel password as well as , when creating users for others in the panel, give them the right selective permissions to control panel options. Heres the overall checkbox that server admins can use when adding a user to their panel.

Create new subuser
INVITE USER
USER EMAIL
Enter the email address of the user you wish to invite as a subuser for this server.

CONTROL

Permissions that control a user's ability to control the power state of a server, or send commands.

CONSOLE

Allows a user to send commands to the server instance via the console.

START

Allows a user to start the server if it is stopped.

STOP

Allows a user to stop a server if it is running.

RESTART

Allows a user to perform a server restart. This allows them to start the server if it is offline, but not put the server in a completely stopped state.

USER

Permissions that allow a user to manage other subusers on a server. They will never be able to edit their own account, or assign permissions they do not have themselves.

CREATE

Allows a user to create new subusers for the server.

READ

Allows the user to view subusers and their permissions for the server.

UPDATE

Allows a user to modify other subusers.

DELETE

Allows a user to delete a subuser from the server.

FILE

Permissions that control a user's ability to modify the filesystem for this server.

CREATE

Allows a user to create additional files and folders via the Panel or direct upload.

READ

Allows a user to view the contents of a directory, but not view the contents of or download files.

READ-CONTENT

Allows a user to view the contents of a given file. This will also allow the user to download files.

UPDATE

Allows a user to update the contents of an existing file or directory.

DELETE

Allows a user to delete files or directories.

ARCHIVE

Allows a user to archive the contents of a directory as well as decompress existing archives on the system.

SFTP

Allows a user to connect to SFTP and manage server files using the other assigned file permissions.

SNAPSHOT

Permissions that control a user's ability to generate and manage server snapshots.

CREATE

Allows a user to create new snapshots for this server.

READ

Allows a user to view all snapshots that exist for this server.

DELETE

Allows a user to remove snapshots from the system.

DOWNLOAD

Allows a user to download a snapshot for the server. Danger: this allows a user to access all files for the server in the snapshot.

RESTORE

Allows a user to restore a snapshot for the server. Danger: this allows the user to delete all of the server files in the process.

ALLOCATION

Permissions that control a user's ability to modify the port allocations for this server.

READ

Allows a user to view all allocations currently assigned to this server. Users with any level of access to this server can always view the primary allocation.

CREATE

Allows a user to assign additional allocations to the server.

UPDATE

Allows a user to change the primary server allocation and attach notes to each allocation.

DELETE

Allows a user to delete an allocation from the server.

STARTUP

Permissions that control a user's ability to view this server's startup parameters.

READ

Allows a user to view the startup variables for a server.

UPDATE

Allows a user to modify the startup variables for the server.

DOCKER-IMAGE

Allows a user to modify the Docker image used when running the server.

DATABASE

Permissions that control a user's access to the database management for this server.

CREATE

Allows a user to create a new database for this server.

READ

Allows a user to view the database associated with this server.

UPDATE

Allows a user to rotate the password on a database instance. If the user does not have the view_password permission they will not see the updated password.

DELETE

Allows a user to remove a database instance from this server.

VIEW_PASSWORD

Allows a user to view the password associated with a database instance for this server.

SCHEDULE

Permissions that control a user's access to the schedule management for this server.

CREATE

Allows a user to create new schedules for this server.

READ

Allows a user to view schedules and the tasks associated with them for this server.

UPDATE

Allows a user to update schedules and schedule tasks for this server.

DELETE

Allows a user to delete schedules for this server.

SETTINGS

Permissions that control a user's access to the settings for this server.

RENAME

Allows a user to rename this server and change the description of it.

REINSTALL

Allows a user to trigger a reinstall of this server.

ACTIVITY

Permissions that control a user's access to the server activity logs.

READ

Allows a user to view the activity logs for the server.

INVITE USER


---
title: Network Configuration and Security
# FAQ: Minecraft Server Network Configuration and Security
categories: ["Server Management"]
---

Ensuring your Minecraft server is securely configured and its network is set up properly are critical steps in hosting. In this FAQ, we will cover the basics of network configuration and the security measures you should implement to protect your server and players.

## Network Configuration Basics

- **IP Addressing**: Assign your server a static IP address to ensure it's consistently reachable.
- **Port Forwarding**: Set up port forwarding on your router to allow external connections to your server.
- **Firewall Settings**: Configure your firewall to permit traffic on the necessary ports while blocking unwanted connections.

## Server Security Essentials

- **Secure Access**: Use strong passwords and adopt SSH keys for remote server access.
- **Updates and Patches**: Regularly update your server software and apply security patches to protect against vulnerabilities.
- **Backups**: Implement a regular backup schedule to safeguard your server's data against loss.
- **Anti-Cheat Measures**: Employ anti-cheat plugins or mods to maintain fair gameplay.

This FAQ has introduced the foundational concepts of network and security configurations for your Minecraft server. Up next, we will look at choosing and managing mods and plugins that can enhance your server's functionality and player experience.
