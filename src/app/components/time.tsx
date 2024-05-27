"use client";
export default function TimeTracker() {
  var sync = new Date().getMilliseconds();
  var syncedTimeout = 1000 - sync;
  setTimeout(displayClock, syncedTimeout);

  function displayClock() {
    const d = new Date();
    var sync = d.getMilliseconds();
    var syncedTimeout = 1000 - sync;

    var date = d.toLocaleDateString();
    const time = d.toLocaleTimeString();
    document!.getElementById("time").innerHTML = `${date} ${time}`;

    setTimeout(displayClock, syncedTimeout);
  }
  return <span id="time"></span>;
}
