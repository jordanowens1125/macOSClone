import Apps from "./components/apps";
import Nav from "./components/nav"

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
      <div className="bottom" id="bottom">
        <Apps />
      </div>
    </main>
  );
}
