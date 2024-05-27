"use client";
import { useState } from "react";

export default function NavHelpItem() {
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
      <p onClick={handleClick}>Help</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p>Send Finder Feedback</p>
        <div className="line"></div>
        <p>macOS Help</p>
      </div>
    </div>
  );
}
