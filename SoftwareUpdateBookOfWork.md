# Automated software updates

## Vision:
As a user I want to have a screen in cockpit or dashboard where I can see if there are any new versions
of the OpenROV components available on the internet.
The user can select packages to download and install on the ROV.
The user can further select what branch he want's to work off.
The user can select what version should be installed. 
Downgrading of the software should be possible.


## Boundries
- This has to be possible without the ROV being connected to the internet itself. The users browsers can be used as a proxy for calls to a server component
- Different branches need to be built on the build server 

## Implementation options 
### github releases
One option could be to use github releases and or a special branch/branches on github to store the .deb packages.

### Server side component
Another option to have a server side component, possibly on the build server that the ROVs connect to 

# ROV tracking

## Vision:
The users browser should announce the ROV to a server component.
Details could contain: 
- IP address
- location via IP geolocation or location api