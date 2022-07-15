import React from "react";

const OverlayLink = ({ openOverlay, direction }) => {
  return (
    <button
      id={direction}
      onClick={(e) => openOverlay(e)}
      className="open-overlay"
    >
      {`Open Overlay-${direction}`}
    </button>
  );
};

export default OverlayLink;
