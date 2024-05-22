"use client";
import { useState } from "react";
import "./window.scss";
export default function Windowcomponent({
  Component,
  header,
  classname,
  iconImg,
  spanClasses,
  index,
}) {
  const [full, setFull] = useState(false);
  const [show, setShow] = useState(false);
  const [used, setUsed] = useState(false);
  const handleInteraction = () => {};
  const dragWindow = () => {
    console.log(1);
  };
  const handleClick = () => {
    setUsed(true);
    setShow(true);
  };
  return (
    <>
      {show && (
        <div
          id={classname}
          className={full ? `window ${classname} full` : `window ${classname}`}
        >
          <div className="header" onDrag={dragWindow}>
            <div className="actions">
              <button onClick={() => setShow(false)}>Red</button>
              <button>Yellow</button>
              <button onClick={() => setFull(!full)}>Green</button>
            </div>
            <p>{header}</p>
          </div>
          {Component}
        </div>
      )}

      <span className={spanClasses}>
        <p>{header}</p>
        <img src={iconImg} alt="" onClick={handleClick} />
        {used && <div></div>}
      </span>
    </>
  );
}
