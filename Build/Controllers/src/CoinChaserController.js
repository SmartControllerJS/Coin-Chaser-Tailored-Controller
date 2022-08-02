import nipplejs from "nipplejs";
import "smartcontroller";

var phone = new smartcontroller.SmartPhoneController();

const wrapper = document.getElementById("buttons");
wrapper.addEventListener("mousedown", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  var message = {
    type: "button",
    button_id: event.target.id,
  };

  phone.sendMessage(message);
  console.dir(event.target.id);
});


var time = Date.now();
var manager = nipplejs.create({
  zone: document.getElementById("zone_joystick"),
  mode: "dynamic",
  color: "red",
});

var CoinChaserController = manager.get(manager.id);

CoinChaserController.on("start", function (evt, data) {
  var message = {
    state: "start",
    CoinChaserController: {
      position: data.position,
      direction: data.direction,
      angle: 0,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});

CoinChaserController.on("move", function (evt, data) {
  var message = {
    state: "move",
    CoinChaserController: {
      position: data.position,
      direction: data.direction,
      angle: data.angle,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});

CoinChaserController.on("end", function (evt, data) {
  var message = {
    state: "end",
    CoinChaserController: {
      position: data.position,
      direction: data.direction,
      angle: 0,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});



