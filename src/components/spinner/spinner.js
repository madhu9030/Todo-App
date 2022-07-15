import React from "react";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="flex fade-in">
      <div>Spinner:</div>
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
