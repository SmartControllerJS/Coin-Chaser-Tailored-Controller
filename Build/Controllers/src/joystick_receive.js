import "smartcontroller";

//** A simple browser side demo showing how to create a smartcontroller joystick object and access fields from each connected controller. */

//a canvas to draw a ball for each player
var canvas = document.getElementById("coordinateCanvas");
var ctx = canvas.getContext("2d");

//a coordinates dictionary to keep track of the current position of each player
var coordinates = {};
var colours = ["red", "blue", "yellow", "green"];

//create an instance of JoystickSmartController, optionally specify a peer ID for the PC browser peer
const simplePeer = new smartcontroller.JoystickSmartController("1234567");

//create and display a QR code for the smartphones, specify url for the controller, div element for the code to be displayed, optionally size and a player ID
//this url is an official Joystick compatible with the JoystickSmartController class
simplePeer.createQrCode(
  "https://smartcontrollerjs.github.io/Controllers/joystick.html",
  "qrcode",
  150,
  150,
  1,
  0
);

//listen for new connections and add the new player id to the coordinates dictionary staring at 100, 100
simplePeer.on("connection", function (data) {
  coordinates[data.peer] = { x: 700, y: 300 }; //data.peer is a peer id of the connected smartphone, used to identify a user and acces the correct coordinates
});

//run an update function to continuously process the data from the phone
processData();

//a function that loops over the connected joysticks and lets each player move a ball on the screen
function processData() {
  //clear canvas for a new frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var i = 0;
  //loop over the controller list
  for (var key in simplePeer.controllerList) {
    var joystick = simplePeer.controllerList[key];
    console.log(joystick.messagesPerSecond);
    //check if the joystick is being used
    if (joystick.isActive) {
      //console.log(joystick.ping);
      //use the peer id to access the matching coordinate pair and add position change to the current player position
      coordinates[joystick.peer.peer].x += joystick.positionChange.x;
      coordinates[joystick.peer.peer].y += joystick.positionChange.y;

      //draw a ball for the new position
      ctx.fillStyle = colours[i];
      i += 1;
      ctx.beginPath();
      ctx.arc(
        coordinates[joystick.peer.peer].x,
        -coordinates[joystick.peer.peer].y,
        10,
        0,
        2 * Math.PI
      );
      ctx.stroke();
      ctx.fill();
    }
  }
  requestAnimationFrame(processData);
}
