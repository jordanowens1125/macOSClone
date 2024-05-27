"use client";
import { useState } from "react";

export default function NavWindowItem() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown(true);
    document.body.addEventListener("click", handleClose);
  };
  const handleClose = () => {
    setShowDropdown(false);
    document.body.removeEventListener("click", handleClose);
  };
  return (
    <div className="nav-item">
      <p onClick={handleClick}>Window</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p className="disabled">Minimize</p>
        <p className="disabled">Zoom</p>
        <p className="disabled">Move Window to Left Side of Screen</p>
        <p className="disabled">Move Window to Right Side of Screen</p>
        <p>Cycle Through Windows</p>
        <div className="line"></div>
        <p className="disabled">Show Previous Tab</p>
        <p className="disabled">Show Next Tab</p>
        <p className="disabled">Move Tab to New Window</p>
        <p className="disabled">Merge All Windows</p>
        <div className="line"></div>
        <p>Bring All to Front</p>
      </div>
    </div>
  );
}
