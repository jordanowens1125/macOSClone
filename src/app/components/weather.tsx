import "./weather.scss";
import Windowcomponent from "./window";

export default function Weather({ iconImg, index }) {
  return (
    <Windowcomponent
      header={"Weather"}
      classname={"weather"}
      iconImg={iconImg}
      Component={
        <div className="app">
          <div className="top">
            <div className="search">
              <input type="text" name="" id="" placeholder="Your City" />
              svg
            </div>

            <div className="left">
              <p>Houston, US svg here</p>
              <p>8:29 PM</p>
              <p className="">29Deg</p>
            </div>
            <div className="right">
              svg here
              <p>Calendar</p>
              <p>Humidity: 57%</p>
              <p>Rain Probability: 0%</p>
              <p>Wind Speed: 4.63km/h</p>
            </div>
            <div className="middle">
              <p>10PM</p>
              SVG
              <p>28deg</p>
            </div>
          </div>
          <div className="bottom">
            <span>
              <p>Sunday</p>
              <div className="icon-and-bold middle">
                <p>Svg</p>
                <p>Clear</p>
              </div>
              <div className="high-low">
                <div className="icon-and-bold">
                  <p>Svg</p>
                  <p>Clear</p>
                </div>
                <div className="icon-and-bold">
                  <p>Svg</p>
                  <p>Clear</p>
                </div>
              </div>
            </span>
          </div>
        </div>
      }
    />
  );
}
