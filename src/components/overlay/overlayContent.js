import React from "react";

const OverlayContent = (
  { closeOverlay, open, setOpen, directionClass = "", onKeyUp },
  ref
) => {
  return (
    <div className={`overlay-content-wrapper ${open ? "show" : ""}`}>
      <div
        tabIndex="-1"
        ref={ref}
        className={`overlay-content ${directionClass}`}
        onKeyUp={(e) => onKeyUp(e)}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
        reprehenderit sequi, fugiat sapiente, incidunt suscipit maiores, laborum
        enim porro omnis ex vel debitis molestiae? Eveniet, corrupti.
        Consectetur qui adipisci esse.
        <div className="overlay-cancel" onClick={(e) => closeOverlay(e)}></div>
      </div>
    </div>
  );
};
const OverlayContentRef = React.forwardRef(OverlayContent);

export default OverlayContentRef;
