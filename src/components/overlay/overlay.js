import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import OverlayLink from "./overlayLink";
import OverlayContent from "./overlayContent";
import "./overlay.scss";

const Overlay = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [getOverlayDirection, setOverlayDirection] = useState(null);
  const openOverlay = (e) => {
    setOverlayDirection(e.target.id);
    document.getElementById("main-root").classList.add("main-root");
    setTimeout(() => {
      setOpen(true);
      ref.current.focus();
    }, 400);
  };
  const closeOverlay = (e) => {
    e.target.classList.add("fade");
    setOpen(false);
    document.getElementById("main-root").classList.remove("main-root");
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 27) {
      e.target.classList.add("fade");
      setOpen(false);
      document.getElementById("main-root").classList.remove("main-root");
    }
  };

  //   useEffect(() => {
  //     if (open) ref.current.focus();
  //   }, [open]);

  return (
    <div className="overlay-main fade-in">
      <OverlayLink openOverlay={openOverlay} direction="normal" />
      <OverlayLink openOverlay={openOverlay} direction="top" />
      <OverlayLink openOverlay={openOverlay} direction="bottom" />
      <OverlayLink openOverlay={openOverlay} direction="left" />
      <OverlayLink openOverlay={openOverlay} direction="right" />
      {open
        ? ReactDOM.createPortal(
            <OverlayContent
              open={open}
              closeOverlay={closeOverlay}
              openOverlay={openOverlay}
              setOpen={setOpen}
              ref={ref}
              onKeyUp={onKeyUp}
              directionClass={getOverlayDirection}
            />,
            document.getElementById("root")
          )
        : ""}
    </div>
  );
};

export default Overlay;
