import React, { useRef } from "react";
import LeftScroll from "./leftScroll";
import RightScroll from "./rightScroll";
import "./syncScroll.scss";

const SyncScroll = () => {
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  const handleScroll = (scrolledItem) => {
    const leftScroll = leftScrollRef.current;
    const rightScroll = rightScrollRef.current;
    if (scrolledItem === "leftscroll") {
      rightScroll.scrollTop = leftScroll.scrollTop;
    } else {
      leftScroll.scrollTop = rightScroll.scrollTop;
    }
  };
  return (
    <div className="parent-scroll">
      <LeftScroll handleScroll={handleScroll} ref={leftScrollRef} />
      <RightScroll handleScroll={handleScroll} ref={rightScrollRef} />
    </div>
  );
};

export default SyncScroll;
