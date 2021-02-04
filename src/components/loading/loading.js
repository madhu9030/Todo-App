import React from "react";
import "./loading.scss";

function Loading({ text }) {
  return (
    <div className="loading">
      <div className="loading-text">{text}</div>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
}

export default Loading;
