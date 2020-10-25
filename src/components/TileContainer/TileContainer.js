import React from "react";
import PropTypes from "prop-types";
import { Tile } from "components";

const TileContainer = ({ tiles }) => {
  const getChildren = () => {
    return tiles.map((item) => (
      <Tile x={item.x} y={item.y} value={item.value} key={item.prog} />
    ));
  };

  return <div className="tile-container">{getChildren()}</div>;
};

TileContainer.propTypes = {
  tiles: PropTypes.array.isRequired,
};

export default TileContainer;
