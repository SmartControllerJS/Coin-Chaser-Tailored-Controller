const path = require("path");

module.exports = {
  entry: {
    joystick_receive: "./src/joystick_receive.js",
    joystick: "./src/joystick.js",
    touchpad_receive: "./src/touchpad_receive.js",
    touchpad: "./src/touchpad.js",
    blog_scroll: "./src/blog_scroll.js",
    nesController: "./src/nesController.js",
    controller_receive: "./src/controller_receive.js",
    CoinChaserController: "./src/CoinChaserController.js",
    CoinChaserController_recieve: "./src/CoinChaserController_recieve.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docs"),
  },

  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    port: 9000,
  },
};
