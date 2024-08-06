# Automate Attendance

## Overview

This project automates the process of marking attendance on a specific attendance site. The script will automatically click the attendance buttons for each course.

## Instructions

**Code Location**: The automation script is located inside `automation/auto-attendance.js`.

**Open Attendance Site**: Open the attendance site on any browser (Chrome recommended).

**Inspect Element**:
- Right-click on the page and select `Inspect` to open the developer tools.
- Go to the `Console` tab.

**Paste the Code**:
- Copy the code from `automation/auto-attendance.js`.
- Paste the code into the console and press `Enter`.

> **Note**: You may see a warning in the console:
> 
> Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. 
>
> Please type ‘allow pasting’ below and hit Enter to allow pasting.

**Enable Pasting**:
- Type `allow pasting` into the console and hit `Enter`. This will enable the paste functionality temporarily.
- Paste the script again and run it.

**Running the Script**:
- The script will run and mark the attendance one by one for each course.

**Stopping the Script**:
- To stop the script, type `stopClicking();` into the console and press `Enter`.
