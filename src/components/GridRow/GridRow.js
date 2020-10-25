import React from "react";
import PropTypes from "prop-types";
import { GridCell } from "components";

const GridRow = ({ size }) => {
  const getChildren = () => {
    return Array(size)
      .fill(null)
      .map((item, index) => <GridCell key={index} />);
  };
  return <div className="grid-row">{getChildren()}</div>;
};

GridRow.propTypes = {
  size: PropTypes.number.isRequired,
};
export default GridRow;
