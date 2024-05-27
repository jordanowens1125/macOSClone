"use client";
import { useState } from "react";
import AppleSvgComponent from "@/app/icons/apple";

export default function NavAppleItem() {
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
      <span onClick={handleClick}>
        <AppleSvgComponent />
      </span>

      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p>About this mac</p>
        <div className="line"></div>
        <p>System Preferences..</p>
        <p>App Store...</p>
        <div className="line"></div>
        <p>Recent Items</p>
        <div className="line"></div>
        <p>Force Quit...</p>
        <div className="line"></div>
        <p>Sleep</p>
        <p>Restart...</p>
        <p>Shut Down...</p>
        <div className="line"></div>
        <p>Lock Screen</p>
        <p>Log Out User</p>
      </div>
    </div>
  );
}
