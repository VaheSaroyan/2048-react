import React from "react";
import PropTypes from "prop-types";
import { GridRow } from "components";

const GridContainer = ({ size }) => {
  const getChildren = () => {
    return Array(size)
      .fill(null)
      .map((item, index) => {
        return <GridRow size={size} key={index} />;
      });
  };
  return <div className="grid-container">{getChildren()}</div>;
};

GridContainer.propTypes = {
  size: PropTypes.number.isRequired,
};

export default GridContainer;
