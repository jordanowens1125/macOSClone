"use client";
import "./apps.scss";
import Draggable from "./draggable";
import Calculator from "./calculator";
import Calendar from "./calendar";
import Wallpaper from "./wallpapers";
import Weather from "./weather";

const WALLPAPERS = "apps-imgs/2.webp";
const CALENDAR = "apps-imgs/4.webp";
const CALCULATOR = "apps-imgs/3.webp";
const WEATHER = "apps-imgs/6.png";

export default function Apps() {
  let index = 1;

  return (
    <div className="container">
      <div className="apps">
        <span>
          <p>Finder</p>
          <img src="apps-imgs/1.webp" alt="" draggable="false" />
          <div></div>
        </span>
        <Wallpaper iconImg={WALLPAPERS} index={index} />
        <Calculator iconImg={CALCULATOR} index={index} />
        <Calendar iconImg={CALENDAR} index={index} />
        <Weather iconImg={WEATHER} index={index} />
        <span className="b-left">
          <p>VSCode</p>
          <img src="apps-imgs/5.webp" alt="" draggable="false" />
          <div></div>
        </span>
        <span>
          <p>Github</p>
          <img src="apps-imgs/7.webp" alt="" draggable="false" />
          <div></div>
        </span>
        <span className="b-left">
          <p>App Store</p>
          <img src="apps-imgs/8.webp" alt="" draggable="false" />
          <div></div>
        </span>
      </div>
    </div>
  );
}
