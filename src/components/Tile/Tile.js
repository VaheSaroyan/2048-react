import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./index.scss";
const Tile = ({ value, x, y }) => {
  const [isNew, setIsNew] = React.useState(true);

  React.useEffect(() => {
    setIsNew(false);
  }, []);

  const classnames_ = classnames(
    "tile",
    "tile-" + value,
    ["tile-position", x + 1, y + 1].join("-"),
    {
      "tile-new": isNew,
    }
  );
  return (
    <div className={classnames_}>
      <div className="tile-inner">{value}</div>
    </div>
  );
};

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Tile;
