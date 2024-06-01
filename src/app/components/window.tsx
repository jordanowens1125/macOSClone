"use client";
import { MouseEventHandler, ReactNode, useState } from "react";
import "./window.scss";
import CloseSvgComponent from "../icons/close";
import MinusSvgComponent from "../icons/minus";
import ExpandSvgComponent from "../icons/expand";
export default function Windowcomponent({
  Component,
  header,
  index,
  classname,
  close,
  setIndex,
}: {
  Component: ReactNode;
  header: string;
  index: number;
  classname: string;
  close: MouseEventHandler;
  setIndex: Function;
}) {
  const [full, setFull] = useState(false);
  const [diffPos, setDiffPos] = useState({ diffX: "30%", diffY: "15%" });

  const onDragStart = (ev: React.DragEvent) => {
    var hideDragImage = ev.currentTarget.cloneNode(true) as HTMLImageElement;
    hideDragImage.id = "hideDragImage-hide";
    var dragImage = ev.currentTarget.cloneNode(true) as HTMLImageElement;
    dragImage.id = "draggeimage";
    dragImage.style.display = "none";
    hideDragImage.style.display = "none";
    document.body.appendChild(hideDragImage);
    document.body.appendChild(dragImage);
    ev.dataTransfer.setDragImage(hideDragImage, 0, 0);
  };

  const onDragEnd = (ev: React.DragEvent<HTMLDivElement>) => {
    const keepMiddleWidth =
      document.getElementById(classname)!.getBoundingClientRect().width / 2;

    let x = ev.pageX - keepMiddleWidth;
    let y = ev.pageY;
    if (x > -keepMiddleWidth && x < window.innerWidth + keepMiddleWidth) {
      setDiffPos({ diffX: x + "px", diffY: y + "px" });
    }
    var hideDragImage = document.getElementById("hideDragImage-hide");
    var dragImage = document.getElementById("draggeimage");
    hideDragImage!.remove();
    dragImage!.remove();
  };

  const onDrag = (ev: React.DragEvent<HTMLDivElement>) => {
    var dragImage = document.getElementById("draggeimage");

    if (dragImage) {
      const keepMiddleWidth =
        document.getElementById(classname)!.getBoundingClientRect().width / 2;
      let x = ev.pageX - keepMiddleWidth;
      let y = ev.pageY;
      if (x > -keepMiddleWidth && x < window.innerWidth + keepMiddleWidth) {
        setDiffPos({ diffX: x + "px", diffY: y + "px" });
      }
    }
  };

  // console.log(diffPos);

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
          className={full ? ` ${classname} window full` : `${classname} window`}
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
              <button onClick={close}>
                <CloseSvgComponent />
              </button>
              <button>
                <MinusSvgComponent />
              </button>
              <button onClick={() => setFull(!full)}>
                <ExpandSvgComponent />
              </button>
            </div>
            <p>{header}</p>
          </div>
          {Component}
        </div>
      </div>
    </>
  );
}
