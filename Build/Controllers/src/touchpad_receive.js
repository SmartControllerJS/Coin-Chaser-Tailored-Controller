import "smartcontroller";

//** A simple browser side demo showing how to create a smartcontroller touchpad object and access fields from each connected controller. */

//a canvas to draw a ball for each finger of each player
var canvas = document.getElementById("coordinateCanvas");
var ctx = canvas.getContext("2d");
var colours = ["red", "yellow", "green", "blue", "orange"]; // use colours to distinguish between players

//create an instance of TouchpadSmartController, optionally specify a peer ID for the PC browser peer
const simplePeer = new smartcontroller.TouchPadSmartController();

//create and display a QR code for the smartphones, specify url for the controller, div element for the code to be displayed, optionally size and a player ID
//this url is an official Touchpad compatible with the TouchPadSmartController class
simplePeer.createQrCode(
  "https://smartcontrollerjs.github.io/Controllers/touchpad.html",
  "qrcode",
  150,
  150
);

//run an update function to continuously process the data from the phone
processData();

//a function that loops over the connected touchpads and lets each player move balls on the screen
function processData() {
  var i = 0;
  //clear canvas for a new frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //loop over the stored controllers
  for (var player in simplePeer.controllerList) {
    //store the controller to access its fields
    var touchpad = simplePeer.controllerList[player];
    //select a colour to draw the circles
    ctx.fillStyle = colours[i];
    i += 1;
    //check if the touchpad is being used
    if (touchpad.isActive) {
      //console.log(touchpad.messagesPerSecond);
      //iterate over the list of coordinate pairs
      for (var key in touchpad.state) {
        //for each pair scale the coordinates to the browser canvas size and draw a ball
        var finger = touchpad.state[key];
        ctx.beginPath();
        ctx.arc(
          finger[0] * canvas.width,
          finger[1] * canvas.height,
          10,
          0,
          2 * Math.PI
        );
        ctx.stroke();
        ctx.fill();
      }
    }
  }
  requestAnimationFrame(processData);
}
