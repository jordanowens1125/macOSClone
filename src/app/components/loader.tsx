import AppleSvgComponent from "../icons/apple";
import "./loader.scss";
export default function Loader() {
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    loader!.classList.add("hide");

    function openCustomContext(x: number, y: number) {
      const yourCtxElement = document.getElementById("ctx-menu");
      const width = yourCtxElement!.clientWidth;
      const height = yourCtxElement!.clientHeight;
      let newX = x;
      let newY = y;
      if (yourCtxElement) {
        if (x > window.innerWidth - width) {
          newX = window.innerWidth - width;
        }
        if (y > window.innerHeight - height) {
          newY = window.innerHeight - height;
        }
        yourCtxElement.style.top = newY + "px";
        yourCtxElement.style.left = newX + "px";
      }
    }

    document.body.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      let x = e.clientX;
      let y = e.clientY;

      openCustomContext(x, y);
    });
    document.addEventListener("click", (e) => {
      const ctx = document.getElementById("ctx-menu");
      if (!ctx?.contains(e.target as HTMLElement)) {
        ctx!.style.top = "100%";
      }
    });
    //   Play sound
    const audio = new Audio("AppleChime.mp3"); //https://www.youtube.com/watch?v=Z9w08Pov-yA
    audio.volume = 0.1;
    audio.play().catch(function (error) {
      console.log("Chrome cannot play sound without user interaction first");
      return;
    });
  };
  setTimeout(() => {
    hideLoader();
  }, 3000);
  const handleClick = (e: any) => {
    return false;
  };
  return (
    <>
      <div id="ctx-menu">
        <p>New Folder</p>
        <div className="line"></div>
        <p>Get Info</p>
        <p>Change Desktop Background</p>
        <div className="line"></div>
        <p>Use Stacks</p>
        <p>Sort By</p>
        <p>Clean Up</p>
        <p>Clean Up By</p>
        <p>Show View Options</p>
      </div>
      <div className="loader" id="loader" onContextMenu={handleClick}>
        <AppleSvgComponent />
        <div className="load-bar">
          <div className="fill"></div>
        </div>
      </div>
    </>
  );
}
