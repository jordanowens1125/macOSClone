"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import SYSTEMCOLORS from "../constants/systemColors";
import "./nav.scss";
import AppleSvgComponent from "../icons/apple";
import SliderSvgComponent from "../icons/slider";
import DarkSvgComponent from "../icons/darkmode";
import AnimationSvgComponent from "../icons/animations";
import NotchSvgComponent from "../icons/notch";
import TimeTracker from "./time";

export default function Nav({
  openWallPaper,
}: {
  openWallPaper: MouseEventHandler;
}) {

  const changeSettingsColor = (color: string) => {
    document.documentElement.style.setProperty(
      "--system-color",
      `hsl(${color})`
    );
  };
  return (
    <nav>
      <div className="left">
        <div className="nav-item">
          <AppleSvgComponent />
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
        <div className="nav-item">
          <p>Finder</p>
          <div className="dropdown">
            <p className="b-bottom">About Finder</p>
            <p className="b-bottom">Preferences</p>
            <p className="b-bottom">Empty Trash</p>
            <p>Hide Finder</p>
            <p>Hide Others</p>
            <p className="disabled">Show All</p>
          </div>
        </div>
        <div className="nav-item">
          <p>Edit</p>
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
        <div className="nav-item">
          <p>View</p>
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
        <div className="nav-item">
          <p>Go</p>
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
        <div className="nav-item">
          <p>Window</p>
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
        <div className="nav-item">
          <p>Help</p>
          <div className="dropdown">
            <p className="b-bottom">About this mac</p>
            <p>System Preferences..</p>
            <p className="b-bottom">App Store...</p>
            <p className="b-bottom">Recent Items</p>
            <p className="b-bottom">Force Quit...</p>
            <p>Sleep</p>
            <p>Restart...</p>
            <p className="b-bottom">Shut Down...</p>
            <p>Lock Screen</p>
            <p>Log Out User</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="nav-item">
          <SliderSvgComponent />
          <div className="dropdown">
            <button>
              <DarkSvgComponent />
              <p className="item-header">Dark mode</p>
            </button>
            <button>
              <AnimationSvgComponent />
              <p className="item-header">Animations</p>
            </button>
            <span className="system-color">
              <p className="item-h">System Color</p>
              <span>
                {SYSTEMCOLORS.map((color) => {
                  return (
                    <div
                      key={color}
                      style={{ ["--color" as string]: `${color}` }}
                      onClick={() => changeSettingsColor(color)}
                    ></div>
                  );
                })}
              </span>
            </span>

            <div className="background-img" onClick={openWallPaper}>
              <img
                src="https://www.macos-web.app/assets/peak-2-DfSFrbB9.webp"
                alt=""
                draggable="false"
              />
              <span>
                <b>Peak</b>
                <p>Dynamic Wallpaper</p>
              </span>
            </div>
            <button className="notch">
              <NotchSvgComponent />
              <p className="item-h">Notch</p>
            </button>
          </div>
        </div>
        <TimeTracker />
      </div>
    </nav>
  );
}
