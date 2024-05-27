"use client";
import { useState } from "react";

export default function NavFileItem() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
    document.body.addEventListener("click", handleClose);
  };
  const handleClose = () => {
    setShowDropdown(false);
    document.body.removeEventListener("click", handleClose);
  };
  return (
    <div className="nav-item">
      <p onClick={handleClick}>File</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p>New Finder Window</p>
        <p>New Folder</p>
        <p className="disabled">New Folder with Selection</p>
        <p>New Smart Folder</p>
        <p>New tab</p>
        <p className="disabled">Open</p>
        <p className="disabled">Open With</p>
        <p className="disabled">Print</p>
        <p className="disabled">Close Window</p>
        <div className="line"></div>
        <p>Get info</p>
        <p className="disabled">Rename</p>
        <div className="line"></div>
        <p className="disabled">Compress</p>
        <div className="line"></div>
        <p className="disabled">Duplicate</p>
        <p className="disabled">Make Alias</p>
        <p className="disabled">Quick Look</p>
        <p className="disabled">Show Original</p>
        <p className="disabled">Add to Sidebar</p>
        <div className="line"></div>
        <p className="disabled">Move to Trash</p>
        <p className="disabled">Eject</p>
        <div className="line"></div>
        <p>Find</p>
        <div className="line"></div>
        <p className="disabled">Tags..</p>
      </div>
    </div>
  );
}
