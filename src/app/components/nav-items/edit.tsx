"use client";
import { useState } from "react";

export default function NavEditItem() {
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
      <p onClick={handleClick}>Edit</p>
      <div className={showDropdown ? "dropdown show" : "dropdown"}>
        <p className="disabled">Undo</p>
        <p className="disabled">Redo</p>
        <div className="line"></div>
        <p className="disabled">Cut</p>
        <p className="disabled">Copy</p>
        <p className="disabled">Paste</p>
        <p className="disabled">Select All</p>
        <div className="line"></div>
        <p>Show Clipboard</p>
        <div className="line"></div>
        <p>Start Dictation</p>
        <p>Emoji & Symbols</p>
      </div>
    </div>
  );
}
