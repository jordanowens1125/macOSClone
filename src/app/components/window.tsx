"use client";
import { useState } from "react";
import "./window.scss";
export default function Windowcomponent({ Component, header, classname }) {
  const [full, setFull] = useState(false);
  const hideCorrespondingWindow = () => {
    const el = document.getElementById(classname);
    el.style.display = "none";
  };
  return (
    <div
      id={classname}
      className={full ? `window ${classname} full` : `window ${classname}`}
    >
      <div className="header">
        <div className="actions">
          <button onClick={hideCorrespondingWindow}>Red</button>
          <button>Yellow</button>
          <button onClick={() => setFull(!full)}>Green</button>
        </div>
        <p>{header}</p>
      </div>
      {Component}
    </div>
  );
}
