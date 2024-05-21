import "./calendar.scss";
import Windowcomponent from "./window";

export default function Calendar() {
  return (
    <Windowcomponent
      header={"Calendar"}
      classname={"calendar"}
      Component={
        <div className="app">
          <span className="top-calendar">
            <b>April 2024</b>
            <div className="calendar-actions">
              <button>Left</button>
              <button>Today</button>
              <button>Right</button>
            </div>
          </span>
          <div className="bottom-calendar">
            <div className="week">
              <p>Mon</p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
              <p>Fri</p>
              <p>Sat</p>
              <p>Sun</p>
            </div>

            <div className="dates">
              <div className="date current">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
              <div className="date">
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
