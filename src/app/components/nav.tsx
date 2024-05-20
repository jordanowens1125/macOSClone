"use client";
import SYSTEMCOLORS from "../constants/systemColors";
import "./nav.scss";

export default function Nav() {
  const changeSettingsColor = (color) => {
    document.documentElement.style.setProperty(
      "--system-color",
      `hsl(${color})`
    );
  };
  return (
    <nav>
      <div className="left">
        <div className="nav-item">
          <p>SVG</p>
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
          <p>Slide</p>
          <div className="dropdown">
            <button>
              svg
              <p className="item-header">Dark mode</p>
            </button>
            <button>
              svg
              <p className="item-header">Animations</p>
            </button>
            <span className="system-color">
              <p className="item-h">System Color</p>
              <span>
                {SYSTEMCOLORS.map((color) => {
                  return (
                    <div
                      key={color}
                      style={{ "--color": `${color}` }}
                      onClick={() => changeSettingsColor(color)}
                    ></div>
                  );
                })}
              </span>
            </span>

            <div className="background-img">
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
              svg
              <p className="item-h">Notch</p>
            </button>
          </div>
        </div>
        <div className="time">Sat May 18 11:59 AM</div>
      </div>
    </nav>
  );
}
