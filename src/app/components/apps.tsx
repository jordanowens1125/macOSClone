import "./apps.scss";

export default function Apps() {
  return (
    <div className="apps">
      <span>
        <p>Finder</p>
        <img src="apps-imgs/1.webp" alt="" draggable="false" />
        <div></div>
      </span>
      <span className="b-left">
        <p>Wallpapers</p>
        <img src="apps-imgs/2.webp" alt="" draggable="false" />
        <div></div>
      </span>
      <span>
        <p>Calculator</p>
        <img src="apps-imgs/3.webp" alt="" draggable="false" />
        <div></div>
      </span>
      <span>
        <p>Calendar</p>
        <img src="apps-imgs/4.webp" alt="" draggable="false" />
        <div></div>{" "}
      </span>
      <span>
        <p>Weather</p>
        <img src="apps-imgs/6.png" alt="" draggable="false" />
        <div></div>
      </span>
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
  );
}
