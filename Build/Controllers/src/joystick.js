import nipplejs from "nipplejs";
import "smartcontroller";

var phone = new smartcontroller.SmartPhoneController();
var time = Date.now();
var manager = nipplejs.create({
  zone: document.getElementById("zone_joystick"),
  mode: "static",
  position: { left: "50%", top: "50%" },
  color: "red",
});

var joystick = manager.get(manager.id);

joystick.on("start", function (evt, data) {
  var message = {
    state: "start",
    joystick: {
      position: data.position,
      direction: data.direction,
      angle: 0,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});

joystick.on("move", function (evt, data) {
  var message = {
    state: "move",
    joystick: {
      position: data.position,
      direction: data.direction,
      angle: data.angle,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});

joystick.on("end", function (evt, data) {
  var message = {
    state: "end",
    joystick: {
      position: data.position,
      direction: data.direction,
      angle: 0,
      force: data.force,
      distance: data.distance,
    },
  };
  phone.sendMessage(message);
});
