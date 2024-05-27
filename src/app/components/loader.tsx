import AppleSvgComponent from "../icons/apple";
import "./loader.scss";
export default function Loader() {
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    loader!.classList.add("hide");
    //   Play sound
    const audio = new Audio("AppleChime.mp3"); //https://www.youtube.com/watch?v=Z9w08Pov-yA
    audio.volume = 0.1;
    audio.play().catch(function (error) {
      console.log("Chrome cannot play sound without user interaction first");
      return
    });
  };
  setTimeout(() => {
    hideLoader();
  }, 3000);
  const handleClick = (e:any) => {
    e.preventDefault();
  };
  return (
    <div className="loader" id="loader" onContextMenu={handleClick}>
      <AppleSvgComponent />
      <div className="load-bar">
        <div className="fill"></div>
      </div>
    </div>
  );
}
