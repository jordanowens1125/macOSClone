"use client";
import { useState } from "react";
import "./window.scss";
export default function Windowcomponent({ Component, header, classname }) {
  const [full, setFull] = useState(false);
  return (
    <div className={full ? `window ${classname} full` : `window ${classname}`}>
      <div className="header">
        <div className="actions">
          <button>Red</button>
          <button >Yellow</button>
          <button onClick={() => setFull(!full)}>Green</button>
        </div>
        <p>{header}</p>
      </div>
      {Component}
    </div>
  );
}
