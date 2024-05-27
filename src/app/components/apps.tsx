"use client";
import "./apps.scss";
import Calculator from "./calculator";
import Calendar from "./calendar";
import Wallpaper from "./wallpapers";
import Weather from "./weather";
import { useState } from "react";

const WALLPAPERS = "apps-imgs/2.webp";
const CALENDAR = "apps-imgs/4.webp";
const CALCULATOR = "apps-imgs/3.webp";
const WEATHER = "apps-imgs/6.png";

export default function Apps({
  showWallpaper,
  setShowWallpaper,
}: {
  showWallpaper: Boolean;
  setShowWallpaper: Function;
}) {
  const [index, setIndex] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  return (
    <>
      <div className="container">
        <div className="apps">
          <span>
            <p>Finder</p>
            <img src="apps-imgs/1.webp" alt="" draggable="false" />
            <div></div>
          </span>
          <div className="divider"></div>
          <span className="">
            <p>{"Wallpaper"}</p>
            <img
              src={WALLPAPERS}
              alt=""
              onClick={() => setShowWallpaper(true)}
            />
            {showWallpaper && <div></div>}
          </span>

          <span className="">
            <p>{"Calculator"}</p>
            <img
              src={CALCULATOR}
              alt=""
              onClick={() => setShowCalculator(true)}
            />
            {showCalculator && <div></div>}
          </span>

          <span className="">
            <p>{"Calendar"}</p>
            <img src={CALENDAR} alt="" onClick={() => setShowCalendar(true)} />
            {showCalendar && <div></div>}
          </span>

          {/* <span className="">
            <p>{"Weather"}</p>
            <img src={WEATHER} alt="" onClick={() => setShowWeather(true)} />
            {showWeather && <div></div>}
          </span>*/}
          <span className="">
            <p>{"Weather"}</p>
            <img src={WEATHER} alt="" draggable="false" />
            <div></div>
          </span>
          <div className="divider"></div>
          <span >
            <p>VSCode</p>
            <img src="apps-imgs/5.webp" alt="" draggable="false" />
            <div></div>
          </span>
          <span>
            <p>Github</p>
            <img src="apps-imgs/7.webp" alt="" draggable="false" />
            <div></div>
          </span>
          <div className="divider"></div>
          <span >
            <p>App Store</p>
            <img src="apps-imgs/8.webp" alt="" draggable="false" />
            <div></div>
          </span>
        </div>
      </div>

      {showWallpaper && (
        <Wallpaper
          index={index}
          setIndex={setIndex}
          close={() => setShowWallpaper(false)}
        />
      )}
      {showCalculator && (
        <Calculator
          index={index}
          setIndex={setIndex}
          close={() => setShowCalculator(false)}
        />
      )}
      {showCalendar && (
        <Calendar
          index={index}
          setIndex={setIndex}
          close={() => setShowCalendar(false)}
        />
      )}
      {/* {showWeather && (
        <Weather
          index={index}
          setIndex={setIndex}
          close={() => setShowWeather(false)}
        />
      )} */}
    </>
  );
}
