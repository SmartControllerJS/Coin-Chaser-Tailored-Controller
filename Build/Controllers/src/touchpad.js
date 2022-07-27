import "smartcontroller";

var phone = new smartcontroller.SmartPhoneController();

// touch input canvas varaibles
var canvasElement = document.getElementsByClassName("input_canvas")[0];
canvasElement.setAttribute("width", window.innerWidth);
canvasElement.setAttribute("height", window.innerHeight);
var canvasCtx = canvasElement.getContext("2d");

function start_handler(ev) {
  ev.preventDefault();
  passCoordinates("start", ev.targetTouches, phone);
}

function move_handler(ev) {
  ev.preventDefault();
  passCoordinates("move", ev.targetTouches, phone);
}

function end_handler(ev) {
  ev.preventDefault();
  if (ev.targetTouches.length == 0) {
    // Restore background and outline to original values
  }
  passCoordinates("end", ev.targetTouches, phone);
}

function set_handlers(e) {
  // Install event handlers for the given element
  var el = canvasElement;
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  // Use same handler for touchcancel and touchend
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

document.addEventListener("DOMContentLoaded", set_handlers);

function passCoordinates(move_type, coords, phone) {
  var coordinates = {};
  for (var i = 0; i < coords.length; i++) {
    coordinates[i] = [
      coords[i].clientX / canvasElement.width,
      coords[i].clientY / canvasElement.height,
    ];
  }
  var message = {
    state: move_type,
    fingers: coords.length,
    coordinates: coordinates,
  };
  phone.sendMessage(message);
}
