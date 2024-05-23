"use client";
import { useState } from "react";
import "./window.scss";
export default function Windowcomponent({
  Component,
  header,
  index,
  classname,
  close,
}) {
  const [full, setFull] = useState(false);
  const [diffPos, setDiffPos] = useState({ diffX: "30%", diffY: "15%" });

  const onDragStart = (ev) => {
    var hideDragImage = ev.target.cloneNode(true);
    hideDragImage.id = "hideDragImage-hide";
    var dragImage = ev.target.cloneNode(true);
    dragImage.id = "draggeimage";
    dragImage.style.display = "none";
    hideDragImage.style.display = "none";
    document.body.appendChild(hideDragImage);
    document.body.appendChild(dragImage);
    ev.dataTransfer.setDragImage(hideDragImage, 0, 0);
  };

  const onDragEnd = (ev: DragEvent<HTMLDivElement>) => {
    const keepMiddleWidth =
      document.getElementById(classname).getBoundingClientRect().width / 2;

    let x = ev.pageX - keepMiddleWidth + "px";
    let y = ev.pageY + "px";
    if (x > -keepMiddleWidth && x < window.innerWidth + keepMiddleWidth) {
      setDiffPos({ diffX: x + "px", diffY: y + "px" });
    }
    var hideDragImage = document.getElementById("hideDragImage-hide");
    var dragImage = document.getElementById("draggeimage");
    hideDragImage.remove();
    dragImage.remove();
  };

  const onDrag = (ev: DragEvent<HTMLDivElement>) => {
    var dragImage = document.getElementById("draggeimage");

    if (dragImage) {
      const keepMiddleWidth =
        document.getElementById(classname).getBoundingClientRect().width / 2;
      let x = ev.pageX - keepMiddleWidth;
      let y = ev.pageY;
      if (x > -keepMiddleWidth && x < window.innerWidth + keepMiddleWidth) {
        setDiffPos({ diffX: x + "px", diffY: y + "px" });
      }
    }
  };

  return (
    <>
      <div
        id={classname}
        className={full ? "full draggable" : "draggable"}
        style={
          full
            ? { zIndex: 1000 }
            : { top: diffPos.diffY, left: diffPos.diffX, zIndex: index }
        }
      >
        <div
          className={full ? `window ${classname} full` : `window ${classname}`}
        >
          <div
            className="header"
            id="header"
            onDrag={onDrag}
            draggable={true}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
          >
            <div className="actions">
              <button onClick={close}>Red</button>
              <button>Yellow</button>
              <button onClick={() => setFull(!full)}>Green</button>
            </div>
            <p>{header}</p>
          </div>
          {Component}
        </div>
      </div>
    </>
  );
}
