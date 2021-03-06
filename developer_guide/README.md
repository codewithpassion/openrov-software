
The OpenROV suite of software is intended for hacking, extending, and modification by everyone.  This guide is intended to get you started on making those changes.  This is a work in progress, feel fee to update this guide and submit pull requests back through github!

The ROV images comes fully loaded with an integrated development envionment for making code changes baked in.  

Were going to get started with creating a new image from scratch that we can use on the beaglebone.  

We are using a base image that is provided by beaglebone.org and modifying it with custom changes and software loads for OpenROV.  The detailed instructions can be found here: https://github.com/OpenROV/openrov-image/blob/master/build-dev-image.md

So now you have an image with the latest version of both our customizations for the linux rootfs image as well as for the OpenROV software that comes with it.


###Local development front-end/middleware without a beaglebone 

You can also develop without any external hardware.  Such development requires mocking out the actual hardware interfaces.

Pre-requistis:
[node.js](https://nodejs.org)

Begin by forking the [cockpit](https://github.com/openrov/openrov-cockpit) project to your own account on github.

Clone your forked repository to your local computer

From the local folder, install the npm and browser depenencies (2nd call to npm install)

```
npm install
cd src/static
npm install
```

Start the node process in debug mode.  You can debug the node.js code running in the middleware several different ways. From the root openrov-cockpit\src folder (modify the settings as needed to change ports or folder locations):

using [node-inspector](https://github.com/node-inspector/node-inspector) which uses the debug ide built in to chrome/opera.  It has the nice feature of [live editing of running code](https://github.com/node-inspector/node-inspector/wiki/LiveEdit) that are reflected almost instantly in the running applicaiton:
Install node-inspector: `npm install -g node-inspector`

```
USE_MOCK=true video_port=8092 photoDirectory="/tmp" video_url="http://localhost:8092/?action=stream" node-debug --web-port 3080 cockpit.js
```
The system will attempt to open your browser to the debug url. It also displays the url in your console so that you can connect manually.  You can then open a second browser instant to localhost:8080 to connect to the cockpit web server.  


Using a command-line debugger: https://nodejs.org/api/debugger.html
You place a debug `debugger;` statement in your code and the console will break at that point and give you control

```
USE_MOCK=true video_port=8092 photoDirectory=/tmp node cockpit.js --debug
```
