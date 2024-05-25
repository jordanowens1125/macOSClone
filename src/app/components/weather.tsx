"use client";
import { MouseEventHandler, useState } from "react";
import "./weather.scss";
import Windowcomponent from "./window";
// import getDataByCity from "../helper/weather";

export default function Weather({
  index,
  setIndex,
  close,
}: {
  index: number;
  setIndex: Function;
  close: MouseEventHandler;
}) {
  // const [input, setInput] = useState("");
  // const [searching, setSearching] = useState(false);
  // const [error, setError] = useState(null);
  // const data = await getDataByCity();

  return (
    <Windowcomponent
      header={"Weather"}
      classname={"weather"}
      index={index}
      setIndex={setIndex}
      close={close}
      Component={
        <div className="app">
          <div className="top">
            <div className="search">
              <input type="text" name="" id="" placeholder="Your City" />
              svg
            </div>

            <div className="left">
              <p>Houston, US svg here</p>
              <p>8:29 PM</p>
              <p className="">29Deg</p>
            </div>
            <div className="right">
              svg here
              <p>Calendar</p>
              <p>Humidity: 57%</p>
              <p>Rain Probability: 0%</p>
              <p>Wind Speed: 4.63km/h</p>
            </div>
            <div className="middle">
              <p>10PM</p>
              SVG
              <p>28deg</p>
            </div>
          </div>
          <div className="bottom">
            <span>
              <p>Sunday</p>
              <div className="icon-and-bold middle">
                <p>Svg</p>
                <p>Clear</p>
              </div>
              <div className="high-low">
                <div className="icon-and-bold">
                  <p>Svg</p>
                  <p>Clear</p>
                </div>
                <div className="icon-and-bold">
                  <p>Svg</p>
                  <p>Clear</p>
                </div>
              </div>
            </span>
          </div>
        </div>
      }
    />
  );
}
