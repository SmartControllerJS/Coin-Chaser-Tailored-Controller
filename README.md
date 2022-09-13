## What is Coin Chaser?
### Motivations and Aims
This is a repository for my Level 4 university project. The goal of the project is to create an interactive game for the public to play using a screen attached to a building (ARC) and smartphones that allow the players to control the game on that screen. 

### Tools and Technologies
* <a href="https://unity.com/">Unity Real-Time Development Platform</a>: to develop the game for the public display
* <a href="https://github.com/">GitHub</a>: to store the project in a backed-up repository and manage issue tracking
* <a href="https://pages.github.com/">GitHub Pages</a>: to launch the game onto a website using the index file at the root of the GitHub repository
* <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WebGL</a>: a JavaScript API, used to render the game onto the hosted website and enable game interaction through browser scripting
* <a href="https://smartcontrollerjs.github.io/SmartController/">SmartController</a>: a JavaScript package that must be imported into the browser script to provide the phone controller interface and to establish communication between the smartphone and display

## Playing the Game
**Note:** During our implementation of the QR code, it was found that the university WiFi service "eduroam" blocked connections using the SmartController package due to its network security configurations. Instead, it is recommended to use mobile data or other WiFi services on campus to allow for connection establishment between the smartphone and display.


### Play Online
To play the game online simply navigate to <a href=https://smartcontrollerjs.github.io/Coin-Chaser-Tailored-Controller/>https://smartcontrollerjs.github.io/Coin-Chaser-Tailored-Controller/</a> and scan the displayed QR code with your smartphone. This will send you to a controller interface as shown below, where you can start to control your character using the SmartController!

![Alt Text](https://imgur.com/GTqxssg.gif)
### Play Locally
**Note:** The locally ran version may encounter WebRTC errors due to browser extensions. For this reason, please run the local game on Chrome rather than browsers like Firefox.
* Download and install <a href="https://unity.com/">Unity Hub</a>
* Install the WebGL Build Support module on the Unity Hub
* Download this repository and open the Game directory as a Unity project
* Navigate to the WebG "Resolution and Presentation" section of the "Project Settings" menu for the game
* Select the "WebsiteTemplate" option as the new WebGL Template
* Build and run the game as a WebGL build, replacing the Build directory with the new build
* Scan the QR code with your smartphone and get ready to play!
