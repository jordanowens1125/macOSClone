"use client";
import { useState } from "react";
import "./calendar.scss";
import Windowcomponent from "./window";
import {
  getLastMonthEndDate,
  getMonthDates,
  getNextMonthDate,
} from "../helper/dates";

export default function Calendar({ index, setIndex, close }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState(getMonthDates(currentDate));
  
  const prevMonth = () => {
    let newDate = getLastMonthEndDate(currentDate);
    setCurrentDate(newDate);
    setDates(getMonthDates(newDate));
  };
  const nextMonth = () => {
    let newDate = getNextMonthDate(currentDate);
    setCurrentDate(newDate);
    setDates(getMonthDates(newDate));
  };
  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setDates(getMonthDates(today));
  };
  return (
    <Windowcomponent
      header={"Calendar"}
      classname={"calendar"}
      index={index}
      setIndex={setIndex}
      close={close}
      Component={
        <div className="app">
          <span className="top-calendar">
            <b>{`${currentDate.toLocaleString("default", {
              month: "long",
            })} ${currentDate.getFullYear()}`}</b>
            <div className="calendar-actions">
              <button onClick={prevMonth}>Left</button>
              <button onClick={handleToday}>Today</button>
              <button onClick={nextMonth}>Right</button>
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
              {dates.map((date) => {
                return (
                  <div
                    className={date.today ? "current date" : "date"}
                    key={`${date.date} ${date.month}`}
                  >
                    <span className={date.activeMonth ? "active" : ""}>{date.date}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}
