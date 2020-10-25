import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";
import "./main.scss";

// require("./managers/game_manager");
require("./managers/keyboard_input_manager");
require("./html_actuator");
require("./managers/local_storage_manager");

// // // Wait till the browser is ready to render the game (avoids glitches)
// window.requestAnimationFrame(function () {
ReactDOM.render(
  <React.StrictMode>
    <Container size={4} startTiles="2" />
  </React.StrictMode>,
  document.getElementById("root")
);
//     // new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
// });
