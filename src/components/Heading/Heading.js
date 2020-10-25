import React from "react";
import PropTypes from "prop-types";

const Heading = ({ score, best }) => {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">{score}</div>
        <span>&nbsp;</span>
        <div className="best-container">{best}</div>
      </div>
    </div>
  );
};
Heading.propTypes = {
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
};
export default Heading;
