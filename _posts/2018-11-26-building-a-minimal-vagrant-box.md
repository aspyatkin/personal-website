---
layout: post
title: 'Building a minimal Vagrant box'
permalink: /building-a-minimal-vagrant-box/
date: 2018-11-26 20:00:00 +0400
author: aspyatkin
meta: DevOps, Linux, Ubuntu, Packer, Vagrant
comments: true
read_time: true
image: /assets/building-a-minimal-vagrant-box/cover.jpg
---

In this post I am going to come up with some ideas for building a minimal [Ubuntu Server](https://www.ubuntu.com/download/server){:target="_blank"} [Vagrant](https://www.vagrantup.com){:target="_blank"} box for [Virtualbox](https://www.virtualbox.org){:target="_blank"} with [Packer](https://www.packer.io){:target="_blank"} as well as present some results based on them.

## Why bother?
[Vagrant](https://www.vagrantup.com){:target="_blank"} is an indispensable tool in a devops engineer's toolchain. The concept revolves around an entity called a **box** - a packed virtual machine (VM) instance, which can be used in order to emulate a real environment on a single developer's machine.

A packed VM instance may take up a great deal of space. Sad but true. One may not consider the size of a box an issue in 2k18, nonetheless the Internet speed isn't terrific anywhere on the globe as well as the fact that SSDs are still a bit pricey.

On the one hand, a certain version on a box is downloaded only once. A cached copy of it is saved on a computer's disk and will be used whenever a new VM instance is launched. On the other hand, a larger box means:
 - a longer time spent downloading a box at first;
 - a substantial amount of space taken on a machine's disk.

For instance, an Ubuntu Server 18.04 Vagrant box built with Packer in [chef/bento](https://github.com/chef/bento) project takes up **457 Mb**. There is definitely a room for improvement.

## Prerequisites

I utilized an Apple MacBook Pro (Late 2013) as a test stand with the following software installed:

- macOS Mojave 10.14.1
- Virtualbox 5.2.22
- Vagrant 2.2.1
- Packer 1.3.2

## Plan

There was no point in creating a Packer configuration from scratch, so I reused [chef/bento](https://github.com/chef/bento){:target="_blank"} repository, making the following improvements for the Ubuntu Server 18.04 LTS template:
- reduce a system disk size;
- remove a swap volume;
- remove a number of packages from the system.

## Step 0: starting point

I made [an extract](https://github.com/aspyatkin/ubuntu-18.04-packer/tree/step0){:target="_blank"} from the aforementioned repository, the resulting box took up **457 Mb**.

## Step 1: disk, compression, audio, USB

Firstly, a minimal box doesn't require a huge system disk. I set 8 Gb as a default. If needed, the disk size may be tuned in the Packer template file. A better solution (without rebuilding the box) might be to attach another disk to the VM instance.

Secondly, a minimal box may well do without a swap volume. Should the need arise, a VM instance's RAM can be increased. Consequently, LVM partitioning gives a dubious advantage in a virtualized environment, therefore it is better to partition the disk manually. I allocated 256 Mb for a boot partition and the rest was made available to a system partition.

Prior to 18.04 the following directive must be included in **preseed.cfg** so as to skip a warning about a swap volume:

```sh
d-i partman-basicfilesystems/no_swap boolean false
```

As of 18.04 the installer creates a swap file by default. To override this behaviour, an other directive must be utilized:

```sh
d-i partman-swapfile/size string 0
```

Last but not the least, I tuned the **compression** option in a Packer template file (from 6 as a default up to 9) and disabled audio and USB capabilities for a VM.

The [changed configuration](https://github.com/aspyatkin/ubuntu-18.04-packer/tree/step1){:target="_blank"} results in a **450 Mb** box and appears to be the first sign of improvement.

## Step 2: skip tasksel standard task

By default, Ubuntu installer comes with a huge set of packages which are included in a tasksel standard task. I added the following preseed directive so as to skip it:

```sh
tasksel tasksel/skip-tasks string standard
```

Still several packages must be installed, namely **openssh-server**, **gcc** and **make**, since they are necessary for remote access and Virtualbox Guest Additions. With the [modified configuration](https://github.com/aspyatkin/ubuntu-18.04-packer/tree/step2){:target="_blank"} the size of the box came to **306 Mb**. Yet there is still something to be done.

## Step 3: remove more packages

Turns out, Ubuntu has a great many packages that may be safely deleted. For instance:
- crda;
- wireless-regdb;
- iw.

The full list may be found in the [last configuration](https://github.com/aspyatkin/ubuntu-18.04-packer/tree/step3){:target="_blank"} (scripts/cleanup.sh). The removal of these packages yields in a **205 Mb** box.

## Summary

Not only was the improvement made in the size of the resulting box, but also in the amount of time spent on the build process. The figures are presented in the table below.

| Stage      | Box size | Build time |
|------------|----------|------------|
| chef/bento | 457 Mb   | 18m 59s    |
| step 0     | 457 Mb   | 18m 46s    |
| step 1     | 450 Mb   | 14m 46s    |
| step 2     | 306 Mb   | 9m 13s     |
| step 3     | 205 Mb   | 8m 54s     |
{:.mbtablestyle}

The final box (step 3) was released on [Vagrant Cloud](https://app.vagrantup.com/aspyatkin/boxes/ubuntu-18.04-server/versions/1.1.0){:target="_blank"}. The project is also published on [GitHub](https://github.com/aspyatkin/ubuntu-18.04-packer){:target="_blank"}.

Using the very same technique, I also managed to reduce the size of [Ubuntu Server 16.04](https://app.vagrantup.com/aspyatkin/boxes/ubuntu-16.04-server-amd64/versions/3.1.1){:target="_blank"} Vagrant box down to **167 Mb**. I was not able to find out whether my boxes are the most minimal but I am pretty sure that the outcome has proved highly satisfactory.

## Tips & useful commands

1. one can use [time](https://linux.die.net/man/1/time){:target="_blank"} so as to measure the time spent on building boxes;
2. `dpkg --list` may be used to list all installed packages;
3. `lsmod | grep vboxguest` may be used to ensure Virtualbox Guest Additions are installed and properly loaded.
