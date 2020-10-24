import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import './main.scss'
//
//
// ReactDOM.render(
//   <React.StrictMode>
//
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
//

require('./game_manager');
require('./keyboard_input_manager');
require('./html_actuator');
 require('./local_storage_manager');

// // // Wait till the browser is ready to render the game (avoids glitches)
// window.requestAnimationFrame(function () {
 ReactDOM.render(<React.StrictMode><Container size="4" startTiles="2" /></React.StrictMode>, document.getElementById('root'));
//     // new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
// });

