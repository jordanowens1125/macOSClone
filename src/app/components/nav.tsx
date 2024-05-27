"use client";
import { MouseEventHandler } from "react";
import "./nav.scss";
import TimeTracker from "./time";
import NavWindowItem from "./nav-items/window";
import NavAppleItem from "./nav-items/apple";
import NavFinderItem from "./nav-items/finder";
import NavEditItem from "./nav-items/edit";
import NavViewItem from "./nav-items/view";
import NavHelpItem from "./nav-items/help";
import NavGoItem from "./nav-items/go";
import NavSettingsItem from "./nav-items/settings";
import NavFileItem from "./nav-items/file";

export default function Nav({
  openWallPaper,
}: {
  openWallPaper: MouseEventHandler;
}) {
  return (
    <nav>
      <div className="left">
        <NavAppleItem />
        <NavFinderItem />
        <NavFileItem />
        <NavEditItem />
        <NavViewItem />
        <NavGoItem />
        <NavWindowItem />
        <NavHelpItem />
      </div>
      <div className="right">
        <NavSettingsItem openWallPaper={openWallPaper} />
        <TimeTracker />
      </div>
    </nav>
  );
}
