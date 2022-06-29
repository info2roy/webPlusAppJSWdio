# Introduction

# Setup Steps
## Install Java
Install Java version 11. The java version displayed should show java version 11 as below.

>java --version
openjdk 11.0.15 2022-04-19 LTS
OpenJDK Runtime Environment Corretto-11.0.15.9.1 (build 11.0.15+9-LTS)
OpenJDK 64-Bit Server VM Corretto-11.0.15.9.1 (build 11.0.15+9-LTS, mixed mode)

## Install Node.js
Install Node.js LTS version v16.15.1 from https://nodejs.org/en/download/

## Install Android Studio 
This is required for Android App automation testing.
Install Latest version of Android Studio from https://developer.android.com/studio

# How To Run Tests
## Run test for Responsive Web
./node_modules/.bin/wdio wdio.resposive.conf.js
## Run test for Android App
./node_modules/.bin/wdio wdio.android.conf.js