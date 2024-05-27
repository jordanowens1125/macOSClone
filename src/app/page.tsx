"use client";
import { useEffect, useState } from "react";
import Apps from "./components/apps";
import Nav from "./components/nav";
import Loader from "./components/loader";

export default function Home() {
  const [showWallpaper, setShowWallpaper] = useState(false);

  // useEffect(() => {
  //   window.onload = () => {
  //     console.log(1);
      
  //     document.body.addEventListener("contextmenu", (e) => {
  //       return false;
  //     });
  //   };
  // }, []);
  const handleLoad = () => {
    console.log(1);
    
  }
  return (
    <main onLoad={handleLoad}>
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
