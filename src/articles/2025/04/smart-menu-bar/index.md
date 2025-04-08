---
date: 2025-04-08T21:57:07.392+02:00
title: "Smart Menu Bar Management: Adapting Icons Based on Your Screen Setup with Bartender"
category:
  - application
  - screen
  - menu
updated: 2025-04-08T22:14:33.635+02:00
syndication:
  - https://social.lol/@alienlebarge/114304130897274950
---

Today, I listened to the latest episode of Apptories: "[Return of the Utility Grab Bag](https://appstories.net/episodes/430)". @viticci@macstories.net was wondering how to show or hide icons in the menu bar depending on which screen was being used. Here's how I do it with Bartender to hide icons when I'm only using the MacBook Pro screen, and to show them all when I'm on my large screen, at home or at work.

## Disclaimer

Not being very comfortable with hardware-related bash scripts, I admit that these were generated with the help of artificial intelligence. But it does the job for me. There may still be some errors and adaptations may be necessary.

## The triggers

I have two triggers: one that detects if only the MacBook Pro screen is active and another that detects if an additional screen is connected to the computer.

### Detection script if only the MacBook Pro screen is being used

```bash
#!/bin/zsh

# Script to detect if ONLY the built-in MacBook Pro screen is being used
# Returns "true" if only the built-in screen is active, "false" if an external monitor is connected

# Get complete information about the screens
DISPLAY_INFO=$(system_profiler SPDisplaysDataType 2>/dev/null)

# Count the total number of active screens
ACTIVE_DISPLAYS=$(echo "$DISPLAY_INFO" | grep -c "Resolution:")

# Count internal screens
INTERNAL_DISPLAYS=$(echo "$DISPLAY_INFO" | grep -c "Connection Type: Internal")

# Check if ONLY the built-in screen is being used
if [[ $ACTIVE_DISPLAYS -eq 1 ]] && [[ $INTERNAL_DISPLAYS -eq 1 ]]; then
    echo "true"
    exit 0
else
    echo "false"
    exit 1
fi
```

### Detection script if an additional screen is connected

```bash
#!/bin/zsh

# Script to detect if an external screen is being used
# Returns "true" if at least one external screen is being used, "false" otherwise

# Get complete information about the screens
DISPLAY_INFO=$(system_profiler SPDisplaysDataType 2>/dev/null)

# Count the total number of active screens
ACTIVE_DISPLAYS=$(echo "$DISPLAY_INFO" | grep -c "Resolution:")

# Count internal screens
INTERNAL_DISPLAYS=$(echo "$DISPLAY_INFO" | grep -c "Connection Type: Internal")

# Calculate the number of external screens (total - internal)
EXTERNAL_DISPLAYS=$((ACTIVE_DISPLAYS - INTERNAL_DISPLAYS))

# For debugging (comment these lines for normal use)
# echo "ACTIVE_DISPLAYS: $ACTIVE_DISPLAYS"
# echo "INTERNAL_DISPLAYS: $INTERNAL_DISPLAYS"
# echo "EXTERNAL_DISPLAYS: $EXTERNAL_DISPLAYS"

# Check if at least one external screen is being used
if [[ $EXTERNAL_DISPLAYS -gt 0 ]]; then
    echo "true"
    exit 0
else
    echo "false"
    exit 1
fi
```

### The presets

The two scripts mentioned above activate two presets depending on whether screens are connected or not. There is a preset that I called "Small screen" which hides all icons and another preset that I called "Big screen" which displays everything by default.
