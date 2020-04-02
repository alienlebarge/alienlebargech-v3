---
title: Switch easily your node version
summary: Switch easily your node version with homebrew and without the need to install a version manager
date: 2019-05-21 07:53:38
tags:
 - node
 - homebrew
---

Sometimes, you need to change your node version but you do not have the need to install a version manager.

Here's a little serie of command to do that:

1. Let's see the version available to install

```shell
brew search node
```

1. Install the desired version

```shell
brew install node@10
```

1. Unlink the curent node version in use

```shell
    brew unlink node
```

1. Link the new version (sometimes, you may have to use `$ brew link --force
   --overwrite node@10`)

```shell
    brew link node@10
```

For more information, check [this StackExchange thread](https://apple.stackexchange.com/questions/171530/how-do-i-downgrade-node-or-install-a-specific-previous-version-using-homebrew).
