import Apps from "./components/apps";
import Calculator from "./components/calculator";
import Calendar from "./components/calendar";
import Nav from "./components/nav";
import Wallpaper from "./components/wallpapers";
import Weather from "./components/weather";

export default function Home() {
  return (
    <main>
      <img
        src="https://www.macos-web.app/assets/peak-2-DfSFrbB9.webp"
        alt=""
        className="background"
        id="background"
      />
      <Nav />
      <div className="bottom">
        <Calculator />
        {/* <Calendar /> */}
        {/* <Weather /> */}
        {/* <Wallpaper /> */}
        <Apps />
      </div>
    </main>
  );
}
