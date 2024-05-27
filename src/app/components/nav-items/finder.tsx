"use client";
import { useState } from "react";

export default function NavFinderItem() {
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
      <p onClick={handleClick}>Finder</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p>About Finder</p>
        <div className="line"></div>
        <p>Preferences</p>
        <div className="line"></div>
        <p>Empty Trash</p>
        <div className="line"></div>
        <p>Hide Finder</p>
        <p>Hide Others</p>
        <p className="disabled">Show All</p>
      </div>
    </div>
  );
}
