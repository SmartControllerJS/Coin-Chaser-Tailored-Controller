import "smartcontroller";

var phone = new smartcontroller.SmartPhoneController();

window.press = function (event, id) {
  event.preventDefault();
  console.log(id);
  phone.sendMessage({ state: "start", button: id });
};

window.release = function (event, id) {
  event.preventDefault();
  phone.sendMessage({ state: "end", button: id });
};

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

var img_array = new Array("images/open.png", "images/close.png");
var full_screen = false;

window.switchScreen = function () {
  if (full_screen) {
    document.getElementById("screenPic").src = img_array[0];
    closeFullscreen();
    full_screen = false;
  } else {
    document.getElementById("screenPic").src = img_array[1];
    openFullscreen();
    full_screen = true;
  }
};

if (screen.availHeight > screen.availWidth) {
  alert("Please use Landscape!");
}
