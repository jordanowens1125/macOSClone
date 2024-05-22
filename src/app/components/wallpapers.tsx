"use client";

import { useState } from "react";
import { DYNAMICBACKGROUNDS } from "../constants/backgrounds";
import "./wallpapers.scss";
import Windowcomponent from "./window";

export default function Wallpaper({ iconImg, index }) {
  const [current, setCurrent] = useState(DYNAMICBACKGROUNDS[8]);
  const setImage = (bg) => {
    const bgEl = document.getElementById("background");
    bgEl.src = bg.image;
    setCurrent(bg);
  };
  return (
    <>
      <Windowcomponent
        header={"Wallpapers"}
        classname={"wallpapers"}
        iconImg={iconImg}
        Component={
          <div className="app">
            <div className="current-wallpaper">
              <img src={current.image} alt={current.name} />
              <p className="item-h">{current.name}</p>
              <p>{current.type}</p>
            </div>

            <div className="dynamic">
              <p className="title">Dynamic Wallpapers</p>
              {DYNAMICBACKGROUNDS.map((bg) => {
                return (
                  <div
                    className={
                      bg.image === current.image
                        ? "wallpaper active"
                        : "wallpaper"
                    }
                    key={bg.name}
                  >
                    <img
                      src={bg.image}
                      alt={bg.name}
                      onClick={() => setImage(bg)}
                    />
                    <p>{bg.name}</p>
                  </div>
                );
              })}
            </div>
            {/* 
        <div className="standalone">
          <p className="title">Standalone Wallpapers</p>
          <div className="wallpaper">
            <img
              src="https://www.macos-web.app/assets/ventura-2-lKTCIr3N.webp"
              alt=""
            />
            <p>Ventura</p>
          </div>
          <div className="wallpaper">
            <img
              src="https://www.macos-web.app/assets/ventura-2-lKTCIr3N.webp"
              alt=""
            />
            <p>Ventura</p>
          </div>
          <div className="wallpaper">
            <img
              src="https://www.macos-web.app/assets/ventura-2-lKTCIr3N.webp"
              alt=""
            />
            <p>Ventura</p>
          </div>
          <div className="wallpaper">
            <img
              src="https://www.macos-web.app/assets/ventura-2-lKTCIr3N.webp"
              alt=""
            />
            <p>Ventura</p>
          </div>
          <div className="wallpaper">
            <img
              src="https://www.macos-web.app/assets/ventura-2-lKTCIr3N.webp"
              alt=""
            />
            <p>Ventura</p>
          </div>
        </div> */}
          </div>
        }
      />
    </>
  );
}
