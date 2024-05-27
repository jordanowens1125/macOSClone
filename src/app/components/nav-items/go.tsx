"use client";
import { useState } from "react";

export default function NavGoItem() {
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
      <p onClick={handleClick}>Go</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p className="disabled">Back</p>
        <p className="disabled">Forward</p>
        <p>Enclosing Folder</p>
        <div className="line"></div>
        <p>Recents</p>
        <p>Documents</p>
        <p>Desktop</p>
        <p>Downloads</p>
        <p>Home</p>
        <p>Computer</p>
        <p>Airdrop</p>
        <p>Network</p>
        <p>iCloud Drive</p>
        <p>Applications</p>
        <p>Utilies</p>
        <div className="line"></div>
        <p>Go to Folder</p>
        <p>Connect to Server</p>
      </div>
    </div>
  );
}
