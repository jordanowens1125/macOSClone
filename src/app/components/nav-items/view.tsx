"use client";
import { useState } from "react";

export default function NavViewItem() {
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
      <p onClick={handleClick}>View</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p className="disabled">As Icons</p>
        <p className="disabled">As List</p>
        <p className="disabled">As Columns</p>
        <p className="disabled">As Gallery</p>
        <div className="line"></div>
        <p>Use Stacks</p>
        <p>Sort By</p>
        <p className="disabled">Clean Up</p>
        <p className="disabled">Clean Up By</p>
        <div className="line"></div>
        <p className="disabled">Hide Sidebar</p>
        <p className="disabled">Show Preview</p>
        <div className="line"></div>
        <p className="disabled">Hide Toolbar</p>
        <p className="disabled">Show All Tabs</p>
        <p className="disabled">Show Tab Bar</p>
        <p className="disabled">Show Path Bar</p>
        <p className="disabled">Show Status Bar</p>
        <div className="line"></div>
        <p className="disabled">Customize Toolbar...</p>
        <div className="line"></div>
        <p>Show View Options</p>
        <p className="disabled">Show Preview Options</p>
        <div className="line"></div>
        <p className="disabled">Enter Full Screen</p>
      </div>
    </div>
  );
}
