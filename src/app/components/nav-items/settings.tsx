"use client";
import { useState } from "react";
import SliderSvgComponent from "@/app/icons/slider";
import DarkSvgComponent from "@/app/icons/darkmode";
import AnimationSvgComponent from "@/app/icons/animations";
import NotchSvgComponent from "@/app/icons/notch";
import SYSTEMCOLORS from "@/app/constants/systemColors";
import { MouseEventHandler } from "react";
import CheckSvgComponent from "@/app/icons/check";

export default function NavSettingsItem({
  openWallPaper,
}: {
  openWallPaper: MouseEventHandler;
}) {
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedColor, setColor] = useState(`hsla(210,100%,52%)`);

  const handleClick = () => {
    setShowDropdown(true);
    document.body.addEventListener("click", handleClose);
  };
  const handleClose = (e: MouseEvent) => {
    let settings = document.getElementById("settings");

    if (settings!.contains(e.target as HTMLElement)) {
    } else {
      setShowDropdown(false);
      document.body.removeEventListener("click", handleClose);
    }
  };

  const changeSettingsColor = (color: string) => {
    document.documentElement.style.setProperty(
      "--system-color",
      `hsla(${color})`
    );
    setColor(`hsla(${color})`);
  };

  return (
    <div className="nav-item" id="settings">
      <span onClick={handleClick}>
        <SliderSvgComponent />
      </span>

      <div
        className={showDropdown ? "dropdown show" : "dropdown"}
        id="settings-dropdown"
      >
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
                  className="color"
                >
                  {`hsla(${color})` === selectedColor && <CheckSvgComponent/>}
                </div>
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
  );
}
