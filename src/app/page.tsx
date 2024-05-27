"use client";
import { useState } from "react";
import Apps from "./components/apps";
import Nav from "./components/nav";
import Loader from "./components/loader";

export default function Home() {
  const [showWallpaper, setShowWallpaper] = useState(false);
  return (
    <main>
      <img
        src="https://www.macos-web.app/assets/peak-2-DfSFrbB9.webp"
        alt=""
        className="background"
        id="background"
      />
      <Nav openWallPaper={() => setShowWallpaper(true)} />
      <div className="bottom" id="bottom">
        <Apps
          showWallpaper={showWallpaper}
          setShowWallpaper={setShowWallpaper}
        />
      </div>
      <Loader />
    </main>
  );
}
