import nipplejs from "nipplejs";
import {onMount} from "svelte";
import "smartcontroller";

var phone = new smartcontroller.SmartPhoneController();
var time = Date.now();
// var manager = nipplejs.create({
//   zone: "zone_joystick",
//   mode: "dynamic",
//   position: { left: "25%", top: "50%" },
//   color: "red",
// });

const wrapper = document.getElementById("buttons");

wrapper.addEventListener("touchstart", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  var message = {
    type: "button",
    button_id: event.target.id,
  };

  phone.sendMessage(message);
  console.dir(event.target.id);
});

// // prevents zoom
// u.prepareEvent = function (evt) { 
//   if (evt.target.className == 'front' || evt.target.className == 'back') evt.preventDefault(); 
//   return evt.type.match(/^touch/) ? evt.changedTouches : evt; 
// };

let joystickDiv;
let joystickActive = false;

onMount(() => {
  const options = {
    zone: joystickDiv, // active zone
    color: "red",
    mode: "dynamic"
  };
  let CoinChaserController = NippleJS.create(options);
  CoinChaserController.on("start", function (evt, data) {
    joystickActive = true;
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
  }).on("move", function (evt, data) {
    joystickActive = true;
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
  }).on("end", function (evt, data) {
    joystickActive = true;
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
});


//var CoinChaserController = manager.get(manager.id);





