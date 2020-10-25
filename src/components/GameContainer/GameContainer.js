import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { GridContainer, TileContainer } from "../index";

const GameContainer = ({ won, over, size, tiles }) => {
  const classes_ = classnames("game-message", {
    "game-won": won,
    "game-over": over,
  });
  const message = won ? "You win!" : "Game over!";
  return (
    <div className="game-container">
      <div className={classes_}>
        <p>{message}</p>
        <div className="lower">
          <span className="keep-playing-button">Keep going</span>
          <span className="retry-button">Try again</span>
        </div>
      </div>
      <GridContainer size={size} />
      <TileContainer size={size} tiles={tiles} />
    </div>
  );
};

GameContainer.propTypes = {
  won: PropTypes.bool.isRequired,
  over: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      prog: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GameContainer;
