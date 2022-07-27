import "smartcontroller";

//** A simple browser side demo showing how to create a smartcontroller Nes object and access fields from each connected controller. */

//create an instance of NesSmartController, optionally specify a peer ID for the PC browser peer
//firstconnected is true by default, only the first player to connect to a specific player ID will be allowed to keep it, the rest of the connections to the same ID won't be allowed
const simplePeer = new smartcontroller.NesSmartController();

//create and display a QR code for the smartphones, specify url for the controller, div element for the code to be displayed,
//optionally size and a player ID, in this case the player ID is set to 1
//the url is an official Nes Controller compatible with the NesSmartController class
simplePeer.createQrCode(
  "https://smartcontrollerjs.github.io/Controllers/nesController.html",
  "qrcode",
  150,
  150,
  "1"
);

//listen for new connections and log them in the console
simplePeer.on("connection", function (data) {
  console.log(data);
});

//run an update function to continuously process the data from the phone
processData();

//a function that checks if player 1 is connected, if yes then check the arrow keys to highlight the buttons
function processData() {
  if (simplePeer.controllerList[1]) {
    //store the controller to access its fields, the dictionary key is 1 because a player ID has been specified, otherwise the peer ID from smartphone will be used
    var controller = simplePeer.controllerList[1];
    var button_id = ["up", "down", "left", "right"];
    console.log(controller.messagesPerSecond);
    //check if up button is pressed, if yes change the background colour from gray to yellow, then do the same for the remaining arrows
    for (var id of button_id) {
      if (controller.buttons[id]) {
        document.getElementById(id).style.backgroundColor = "#e9ec06";
      } else {
        document.getElementById(id).style.backgroundColor = "#dddcdc";
      }
    }
  }
  requestAnimationFrame(processData);
}
